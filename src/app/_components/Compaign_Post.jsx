import Button from './Button';
export default function Compaign_Post({post, cls=""}) {
    return (
        <div className="fl-col fl-node-m56t8whcli39 fl-col-small campaigns-section" data-id={post.id} data-node="m56t8whcli39">
            <div className="fl-col-content fl-node-content">
                <div className="fl-module fl-module-photo fl-node-mvsxu21j8bkf" data-node="mvsxu21j8bkf">
                    <div className="fl-module-content fl-node-content">
                        <div className="fl-photo fl-photo-align-center" itemScope itemType="https://schema.org/ImageObject">
                            <div className="fl-photo-content fl-photo-img-svg">
                                <img loading="lazy" decoding="async" className="fl-photo-img wp-image-43139 size-full" src={post.img} alt={post.title} title={post.title} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fl-module fl-module-heading fl-node-qa1dvgztusk0" data-node="qa1dvgztusk0">
                    <div className="fl-module-content fl-node-content">
                        <h3 className="fl-heading">
                            <span className="fl-heading-text">{post.title}</span>
                        </h3>
                    </div>
                </div>
                <div className="fl-module fl-module-rich-text fl-node-mox8dywh0g4n" data-node="mox8dywh0g4n">
                    <div className="fl-module-content fl-node-content">
                        <div className="fl-rich-text">
                            <p>{post.desc}</p>
                        </div>
                    </div>
                </div>
                <Button btnTxt="Read More" align="center" />
                {/* <div className="fl-module fl-module-button fl-node-iadf9qgc4m58 button_new2023 arrow_pink" data-node="iadf9qgc4m58">
                    <div className="fl-module-content fl-node-content">
                        <div className="fl-button-wrap fl-button-width-auto fl-button-center">
                            <a href="#" target="_self" className="fl-button">
                                <span className="fl-button-text">Read More</span>
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}