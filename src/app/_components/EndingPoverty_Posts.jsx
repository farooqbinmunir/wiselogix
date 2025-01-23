import EndingPoverty_Post from './EndingPoverty_Post';
export default function EndingPoverty_Posts({cls=""}) {
    const endingPovertyPosts = [
		{
			title: "Lorem ipsum 1",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus."
        },{
			title: "Lorem ipsum 2",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus."
        },{
			title: "Lorem ipsum 3",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus."
        }
	];
    return (
        <div id="section_ending_poverty_posts" className={`${cls} fl-row fl-row-full-width fl-row-bg-none fl-node-i8mk4jf9v70g fl-row-default-height fl-row-align-center`} data-node="i8mk4jf9v70g">
            <div className="fl-row-content-wrap">
                <div className="fl-row-content fl-row-fixed-width fl-node-content">

                    <div className="fl-col-group fl-node-kbxfdlvh3rw2" data-node="kbxfdlvh3rw2">
                        <div className="fl-col fl-node-ke7gso4u9vd2 fl-col-has-cols" data-node="ke7gso4u9vd2">
                            <div className="fl-col-content fl-node-content">
                                <div className="fl-col-group fl-node-ubilw4zmxh5d fl-col-group-nested fl-col-group-equal-height fl-col-group-align-top" data-node="ubilw4zmxh5d">
                                    {endingPovertyPosts.map((post, index) => <EndingPoverty_Post post={post} key={index} cls="ending_poverty_post_component" />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}