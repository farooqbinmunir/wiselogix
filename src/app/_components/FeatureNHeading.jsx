import {Title} from '../exports';
export default function FeatureNHeading({featureText, headingText, headingTag, id, classes = 'feature_heading_container', center = false}){
    let alignCenter = center ? 'center' : '';
    return(
        <>
            <div id={id} className={`feature_heading_container ${classes} ${alignCenter}`}>
                <div className="feature-text">
                    <span className="uppercase blue_text">{featureText}</span>
                </div>
                <Title title={headingText} classes={`${id}-text m-0 m-block-20`} headingTag={headingTag} />
            </div>
        </>
    );
}