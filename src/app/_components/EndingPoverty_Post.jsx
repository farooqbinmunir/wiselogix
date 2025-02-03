export default function EndingPoverty_Post({post, cls=""}) {
    return (
        <div className={`${cls} fl-col fl-node-ey6zosxp4vma fl-col-small`} data-node="ey6zosxp4vma">
            <div className="fl-col-content fl-node-content">
                <div className="fl-module fl-module-heading fl-node-4dz8g10socbt" data-node="4dz8g10socbt">
                    <div className="fl-module-content fl-node-content">
                        <h3 className="fl-heading"><span className="fl-heading-text">{post.postTitle}</span></h3>
                    </div>
                </div>
                <div className="fl-module fl-module-rich-text fl-node-b2pg95xvotri"
                    data-node="b2pg95xvotri">
                    <div className="fl-module-content fl-node-content">
                    <div className="fl-rich-text">
                        <p>{post.postDescription}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}