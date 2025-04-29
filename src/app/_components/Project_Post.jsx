import Image from 'next/image';
import Button from './Button';
export default async function Project_Post({post, cls=""}) {
    return (
        <div className="fl-col fl-node-m56t8whcli39 fl-col-small campaigns-section" data-id={post.databaseId} data-node="m56t8whcli39">
            <div className="fl-col-content fl-node-content">
                <div className="fl-module fl-module-photo fl-node-mvsxu21j8bkf" data-node="mvsxu21j8bkf">
                    <div className="fl-module-content fl-node-content">
                        <div className="fl-photo fl-photo-align-center" itemScope itemType="https://schema.org/ImageObject">
                            <div className="fl-photo-content fl-photo-img-svg">
                                <Image loading="lazy" decoding="async" className="fl-photo-img wp-image-43139 size-full" src={post?.featuredImage?.node ? post?.featuredImage?.node?.sourceUrl : null} alt={post.title} title={post.title} width="100" height="60" />
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
                            <p>{post.excerpt}</p>
                        </div>
                    </div>
                </div>
                <Button btnTxt="Read More" link={post.uri} align="center" />
            </div>
        </div>
    );
}