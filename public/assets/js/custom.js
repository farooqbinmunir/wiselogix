// Akram js dtart

let faqs_wrapper = document.querySelector(".faqs_wrapper");

if(faqs_wrapper){
    let faqs_item = document.querySelectorAll(".faqs_question");
    faqs_item.forEach((v, i, a) => {
        v.addEventListener("click", function(){
            let faqs_answer = document.querySelectorAll(".faqs_answer");
            let isActiveFaqs = this.nextElementSibling.classList.contains('faqs_answer_show');
            faqs_answer.forEach((x, y, z) => {
                x.classList.remove('faqs_answer_show');
            });
            if(!isActiveFaqs){
                this.nextElementSibling.classList.add('faqs_answer_show');
            }
        }, true);
    });
}

// Light Box Code

lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    fadeDuration: 300,
});




// Akram js end