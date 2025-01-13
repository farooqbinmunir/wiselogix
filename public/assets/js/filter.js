/**
 * Returns a hash code from a string
 * @param  {String} str The string to hash.
 * @return {Number}    A 32bit integer
 * @see http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 */
const hashCode = (str) => {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

const tags_to_semantic_tags = (tags, label_id) => {
  let tag_list = tags.split(',');
  // no need to format tags if there is not actually a list of them to format.
  if (tag_list.length <= 1) {
    return tags;
  }
  // otherwise, create a <ul> with each tag item an <li> within it.
  let semantic_tags_html = document.createElement('ul');
  semantic_tags_html.setAttribute("aria-labelledby", label_id);
  let semantic_tags = tags
    // split tags on ',' delmiiter
    .split(',')
    // convert the text into an <li> tag containing the text
    .map((tag) => {
      let li = document.createElement('li');
      li.innerText = tag;
      return li;
    })
    // add the <li> items to the <ul>
    .forEach((li) => {
      semantic_tags_html.append(li);
    });
  // return the full HTML of the <ul>
  return semantic_tags_html.outerHTML;
}

jQuery(window).on('load', function () {

    $ = jQuery;

    // SETTINGS
    var maxNumberOfPosts = 10; // Initial number of posts to load
    var loadMoreNumber = 10; // Number fo posts to load when click on Load More
    var leftoverPosts = [];
    var lastIndex = 0;

    let $filterForm = $('.filter--menu-options form');
    if ($filterForm.attr('data-form-number-init')) maxNumberOfPosts = parseInt($filterForm.attr('data-form-number-init'), 10);
    if ($filterForm.attr('data-form-number-loadmore')) loadMoreNumber = parseInt($filterForm.attr('data-form-number-loadmore'), 10);


    var cpt = $filterForm.attr('data-post-type');
    var dataType = $filterForm.attr('data-type');
    var policyType = $filterForm.attr('data-policy');
    var headingLevel = $filterForm.attr('data-heading-level');

    if ($(".filter--menu-options").length) {
        $.ajax({
            type: 'GET',
            async: true,
            url: `/wp-json/wl/v1/${cpt}`,
            dataType: "json",
            success: function (response) {
                // console.log(response);
                var filteredResponse = [];

                if (!dataType && !policyType) {
                    breakDownData(response);
                } else if (dataType && !policyType) {
                    // var filteredResponse = response.filter(resp => resp.type.slug.includes(dataType));

                    $.map(response, function (resp) {
                        if (resp.policy_area.slug != null) {
                            if (resp.type.slug.includes(policyType)) {
                                filteredResponse.push(resp);
                            }
                        }
                    });

                    breakDownData(filteredResponse);
                    // console.log(filteredResponse);
                } else if (!dataType && policyType) {
                    // var filteredResponse = response.filter(resp => resp.policy_area.slug.includes(policyType));

                    $.map(response, function (resp) {
                        if (resp.policy_area.slug != null) {
                            if (resp.policy_area.slug.includes(policyType)) {
                                filteredResponse.push(resp);
                            }
                        }
                    });

                    breakDownData(filteredResponse);
                    // console.log(filteredResponse);
                }
            }
        })
    }

    function updateResultCount(visible, total){
        let text = 'No results found';
        if(total > 0){
            text ='Displaying ' + visible + ' of ' + total + ' results found';
        }
        if (text === $('.filter--menu-options .filter--result-count').text()) {
            text += ' ';
        }
        $('.filter--menu-options .filter--result-count').text(text);
    }

    function getNewPostElement(post) {
        let ft_image = post.img['featured_image'] || '/wp-content/uploads/2020/12/pexels-giuseppe-piccinni-733409.jpg';
        let tags = getTypeAndPolicies(post.type.name, post['policy_area'].name);
        let label_id = hashCode(tags);
        let semantic_tags = tags_to_semantic_tags(tags, label_id);
        let tagsMarkup = tags ? `<span class="unified_story_card_item_tag_list"><label class="sr-only" id="${label_id}">Tags:&nbsp;</label>${semantic_tags}</span>` : '';
        return $(
            `<div class="unified_story_card_item" style="transform:scale(0.001);transition:transform 0.2s, opacity 0.2s;opacity:0;">
                <div class="unified_story_card_item_info">
                    <div class="unified_story_card_item_heading_tags">
                        <a class="unified_story_card_item_heading" href="${post.permalink}"><h${headingLevel}>${post.title}</h${headingLevel}></a>
                        ${tagsMarkup}                            
                    </div>
                    <p>${post.content}</p>
                    <p class="unified_story_card_item_byline">by ${post.author} | ${post.date}</p>
                </div>
                <div class="unified_story_card_item_image_container">
                    <img src="${ft_image}" alt="${(post.img.alt || '').replace(/"/g,'&quot;')}">
                </div>
            </div>`
        );
    }

    function showNewPostsWithAnimation(){
        setTimeout(function(){
            $('.filter--items-wrapper .unified_story_card_item').css({'transform': 'scale(1)', 'opacity': 1});
        },1);
    }

    function breakDownData(res) {


        // HIDE LOADING AFTER FULL LOAD
        $(".filter--loading").hide();

        var $grid = $('.filter--items-wrapper');

        ///////////////////////////////////////////// INITIAL POSTS LOAD /////////////////////////////////////////////
        if (res.length === 0) {
            updateResultCount(0,0);
            $grid.html('<p class="filter_nofound">Nothing found. Please try a different filter.</p>');
        }

        function loadAllPosts() {
            lastIndex = 0
            leftoverPosts = [];
            $.map(res, function (post, i) {

                // LOAD MAX NUMBER OF POSTS
                if (i <= maxNumberOfPosts - 1) {
                    $grid.append(getNewPostElement(post));
                } else {
                    leftoverPosts.push(post);
                }
            });
            showNewPostsWithAnimation();

            updateResultCount(Math.min(res.length, maxNumberOfPosts), res.length);

            // INITIAL CHECK IF LOAD MORE NEEDED SHOW LOAD MORE BTN
            (res.length > maxNumberOfPosts) ? $(".filter--load-more").fadeIn() : $(".filter--load-more").fadeOut();

        }
        loadAllPosts();

        function clearGrid(onClear) {
            let $items = $('.filter--items-wrapper .unified_story_card_item');
            if ($items.length) {
                $items.first().on('transitionend webkitTransitionEnd oTransitionEnd', function () {
                    $grid.html('');
                    onClear();
                });
                $items.css({'transform': 'scale(0.001)', 'opacity': 0});
            } else {
                $grid.html('');
                onClear();
            }
        }

        $(".filter--menu-options .filter--filter-clear").click(function (e) {
            e.preventDefault();
    
            // Uncheck all checkboxes
            $(".filter--menu-options .filter-btn").each(function () {
                $(this).prop('checked', false);
            });

            $(".filter--menu-options .filter--options-box").slideUp();

            // REMOVE ITEMS FROM grid
            clearGrid(function(){
                loadAllPosts();
            });

        });


        // FILTER FEEDER
        let list = [];
        var typeArray = [];
        var policyArray = [];

        let $filterCheckboxes = $('.filter--menu-options .filter-btn');
        $filterCheckboxes.on('click', function () {
            var filterValue = $(this).val();

            if ($(this).attr('data-tax-name') === '0') {
                //Check if value exist on the array
                if (typeArray.indexOf(filterValue) === -1) {
                    //If not add to the array
                    typeArray.push(filterValue);
                } else {
                    //If yes remove it from the array
                    typeArray.splice(typeArray.indexOf(filterValue), 1);
                }
            } else {
                //Check if value exist on the array
                if (policyArray.indexOf(filterValue) === -1) {
                    //If not add to the array
                    policyArray.push(filterValue);
                } else {
                    //If yes remove it from the array
                    policyArray.splice(policyArray.indexOf(filterValue), 1);
                }
            }

            list = [];
            list.push(typeArray, policyArray);

        });



        // FILTER BTN ACTION HANDLER
        $(".filter--menu-options .filter--filter-btn").click(function (e) {
            e.preventDefault();

            let filteredMarkers = [];
            let multiActiveFilterOptions = [];

            if (list[0].length && list[1].length) {
                for (x = 0; x < list[0].length; x++) {
                    for (y = 0; y < list[1].length; y++) {
                        multiActiveFilterOptions.push([list[0][x], list[1][y]])
                    }
                }

                for (i = 0; i < res.length; i++) {
                    if (res[i].type.slug && res[i].policy_area.slug) {
                        for (j = 0; j < multiActiveFilterOptions.length; j++) {
                            if (res[i].type.slug.includes(multiActiveFilterOptions[j][0]) && res[i].policy_area.slug.includes(multiActiveFilterOptions[j][1])) {
                                if (!filteredMarkers.includes(res[i])) {
                                    filteredMarkers.push(res[i]);
                                }
                            }
                        }
                    }
                }
            } else if (list[0].length) {
                list[0].map(function (i) {
                    multiActiveFilterOptions.push([i, '']);
                });

                for (i = 0; i < res.length; i++) {
                    if (res[i].type.slug) {
                        for (j = 0; j < multiActiveFilterOptions.length; j++) {
                            if (res[i].type.slug.includes(multiActiveFilterOptions[j][0])) {
                                if (!filteredMarkers.includes(res[i])) {
                                    filteredMarkers.push(res[i]);
                                }
                            }
                        }
                    }
                }
            } else if (list[1].length) {
                list[1].map(function (i) {
                    multiActiveFilterOptions.push(['', i]);
                });

                for (i = 0; i < res.length; i++) {
                    if (res[i].policy_area.slug) {
                        for (j = 0; j < multiActiveFilterOptions.length; j++) {
                            if (res[i].policy_area.slug.includes(multiActiveFilterOptions[j][1])) {
                                if (!filteredMarkers.includes(res[i])) {
                                    filteredMarkers.push(res[i]);
                                }
                            }
                        }
                    }
                }
            } else {
                for (i = 0; i < res.length; i++) {
                    filteredMarkers.push(res[i]);
                }
            }


            ///////////////////////////////////////////// FILTERED LOAD /////////////////////////////////////////////

            // REMOVE ITEMS FROM the grid
            clearGrid(function () {

                leftoverPosts = [];
                lastIndex = 0;

                if (filteredMarkers.length > 0) {
                    $(".filter--items-error").fadeOut();
                    filteredMarkers.map(function (post, i) {

                        // LOAD MAX NUMBER OF POSTS
                        if (i <= maxNumberOfPosts - 1) {
                            $grid.append(getNewPostElement(post));
                        } else {
                            leftoverPosts.push(post);
                        }

                    });
                } else {
                    console.log('Nothing found!');
                    $(".filter--items-error").fadeIn();
                }

                showNewPostsWithAnimation();

                updateResultCount(Math.min(filteredMarkers.length, maxNumberOfPosts), filteredMarkers.length);

                // IF NUMBER OF grid ITEMS HIGHER THAN THE NUMBER OF POSTS TO SHOW THEN FADE IN THE LOAD MORE BUTTON ELSE HIDE
                (filteredMarkers.length > maxNumberOfPosts) ? $(".filter--load-more").fadeIn() : $(".filter--load-more").fadeOut();

            });


        });





        // LOAD MORE BUTTON
        $('.filter--load-more .button_').click(function (e) {
            e.preventDefault();


            //console.log("loadinit="+maxNumberOfPosts)
            //console.log("loadmore="+loadMoreNumber)
            //console.log("lastindex="+lastIndex)

            // GET NEXT SET OF POSTS
            let nextSet = leftoverPosts.slice(lastIndex, lastIndex + loadMoreNumber);
            let totalNumberOfPosts = maxNumberOfPosts + leftoverPosts.length;
            if (nextSet.length >= loadMoreNumber) {
                lastIndex += loadMoreNumber
                updateResultCount(maxNumberOfPosts + lastIndex, totalNumberOfPosts);
            } else {
                $(this).fadeOut();
                lastIndex = 0;
                updateResultCount(totalNumberOfPosts, totalNumberOfPosts);
            }

            ///////////////////////////////////////////// LOAD MORE LOAD /////////////////////////////////////////////
            let firstNewElement = null;
            nextSet.map(function (post) {
                let newPostElement = getNewPostElement(post);
                if (!firstNewElement) {
                    firstNewElement = newPostElement;
                }
                $grid.append(newPostElement);
            });

            showNewPostsWithAnimation();
            if (firstNewElement){
                //wait 200 ms (until CSS animation should be complete) and set focus to first element
                setTimeout(function(){
                    let firstHeading = firstNewElement.find('h1 a, h2 a, h3 a, h4 a, h5 a, h6 a').first();
                    if (firstHeading.length) {
                        firstHeading.focus(); //set focus to the first heading/link
                    } else {
                        firstNewElement.find('a, button').first().focus(); //there is no heading link, so set focus to the first link or button
                    }
                },200);
            }

        });

        // FRONTEND
        $(".filter--menu-options .filter-options-trigger").each(function () {
            let $button = $(this);
            $button.click(function (e) {
                e.preventDefault();
                let checkboxesContainer = $button.next();
                $button.attr('aria-expanded',checkboxesContainer.css('display') === 'none');
                checkboxesContainer.slideToggle();
            });
        })

        $('body').click(function (e) {
            //close the filter options box when the user clicks outside of it
            if ($(e.target).closest('.filter_publication_type, .filter_policy_area, .filter--filter-btn').length === 0) {
                //do not close the filter box if the user is clicking inside of it
                $('.filter--menu-options button.filter-options-trigger').attr('aria-expanded',false);
                $(".filter--menu-options .filter--options-box").slideUp();
            }
        });

        $('.filter--menu-options .filter_publication_type .filter-options-trigger').focus(function () {
            //close the other filter box when this one is opened
            $('.filter--menu-options .filter_policy_area .filter-options-trigger').attr('aria-expanded',false).next().slideUp();
        });

        $('.filter--menu-options .filter_policy_area .filter-options-trigger').focus(function () {
            //close the other filter box
            $('.filter--menu-options .filter_publication_type .filter-options-trigger').attr('aria-expanded',false).next().slideUp();
        });

        $('.filter--menu-options .filter--filter-clear').focus(function(){
            //when the clear button is focused, close both drop downs
            $('.filter--menu-options .filter-options-trigger').attr('aria-expanded',false);
            $(".filter--menu-options .filter--options-box").slideUp();
        });

        $filterCheckboxes.change(function () {
            $(this).parents(".filter--menu-options").find('.filter--filter-btn').trigger("click")
        })
    }


    // GET TYPE AND POLICIES
    function getTypeAndPolicies(type, policy) {
        var typeAndPoliciesArray = [...type || [], ...policy || []];
        if (typeAndPoliciesArray.length > 5) {
            var extras = typeAndPoliciesArray.splice(5);
            typeAndPoliciesArray.push('and ' + extras.length + ' more...');
        }

        return typeAndPoliciesArray.join(', ');
    }



});



jQuery(window).on('load', function () {

    $ = jQuery;

    // SETTINGS
    var maxNumberOfPosts = 10; // Initial number of posts to load
    var loadMoreNumber = 10; // Number fo posts to load when click on Load More
    var leftoverPosts = [];

    let $filterForm = $('.filter--menu-options-nofilter form');
    if ($filterForm.attr('data-form-number-init')) maxNumberOfPosts = parseInt($filterForm.attr('data-form-number-init'), 10);
    if ($filterForm.attr('data-form-number-loadmore')) loadMoreNumber = parseInt($filterForm.attr('data-form-number-loadmore'), 10);

    var cpt_nofilter = $filterForm.attr('data-post-type');
    var policyType = $filterForm.attr('data-policy');
    var headingLevel = $filterForm.attr('data-heading-level');

    if ($('.filter--menu-options-nofilter').length) {
        $.ajax({
            type: 'GET',
            async: true,
            url: `/wp-json/wl/v1/${cpt_nofilter}`,
            dataType: "json",
            success: function (response) {
                // console.log(response);
                var filteredResponse = [];
                $.map(response, function (resp) {
                    if (resp.policy_area.slug != null) {
                        if (resp.policy_area.slug.includes(policyType)) {
                            filteredResponse.push(resp);
                        }
                    }
                });
                // var filteredResponse = response.filter(resp => resp.type.slug.includes(dataType) && resp.policy_area.slug.includes(policyType));
                console.log(filteredResponse);
                breakDownData(filteredResponse);
            }
        })
    }

    function breakDownData(res) {

        // HIDE LOADING AFTER FULL LOAD
        $(".filter--loading-nofilter").hide();

        var $grid = $('.filter--items-wrapper-nofilter');

        ///////////////////////////////////////////// INITIAL POSTS LOAD /////////////////////////////////////////////
        if (!res.length) {
            $grid.html('<p class="filter_nofound">Nothing found. Please try a different filter.</p>');
        }

        leftoverPosts = [];
        $.map(res, function (post, i) {
            // LOAD MAX NUMBER OF POSTS
            if (i <= maxNumberOfPosts - 1) {
                $grid.append(getNewPostElement(post));
            } else {
                leftoverPosts.push(post);
            }
        });
        showNewPostsWithAnimation();


        // INITIAL CHECK IF LOAD MORE NEEDED SHOW LOAD MORE BTN
        (res.length > maxNumberOfPosts) ? $(".filter--load-more-nofilter").fadeIn() : $(".filter--load-more-nofilter").fadeOut();


        // LOAD MORE BUTTON
        var lastIndex = 0;
        let nextSet;

        $('.filter--load-more-nofilter .button_').click(function (e) {
            e.preventDefault();

            // GET NEXT SET OF POSTS
            nextSet = leftoverPosts.slice(lastIndex, lastIndex + loadMoreNumber);
            if (nextSet.length >= loadMoreNumber) {
                lastIndex += loadMoreNumber
            } else {
                $(this).fadeOut();
                lastIndex = 0;
            }

            ///////////////////////////////////////////// LOAD MORE LOAD /////////////////////////////////////////////
            let firstNewElement = null;
            nextSet.map(function (post) {
                let newPostElement = getNewPostElement(post);
                if (!firstNewElement){
                    firstNewElement = newPostElement;
                }
                $grid.append(newPostElement);
            });

            showNewPostsWithAnimation();
            if (firstNewElement){
                //wait 200 ms (until CSS animation should be complete) and set focus to first element
                setTimeout(function(){
                    let firstHeading = firstNewElement.find('h1 a, h2 a, h3 a, h4 a, h5 a, h6 a').first();
                    if (firstHeading.length) {
                        firstHeading.focus(); //set focus to the first heading/link
                    } else {
                        firstNewElement.find('a, button').first().focus(); //there is no heading link, so set focus to the first link or button
                    }
                },200);
            }
        });

    }

});
