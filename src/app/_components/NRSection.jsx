import {FeatureNHeading, Title} from '../exports';
export default function NRSection ({secFeatureTxt, secHeading, children, id, classes, titleTag = 'h2', center = false}){
    const alignCenter = center === true ? 'center' : '';
    return (
        <>
            <div id={id} className={`nr-section ${classes}`}>
                <div className={`${id}-wrap nr-section-wrap`}>
                    <FeatureNHeading featureText={secFeatureTxt} headingText={secHeading} id={`${id}-heading`} classes={classes} headingTag={titleTag} center={center} />
                    {/* <div className={`${id}-header nr-section-header ${alignCenter}`}>
                        <div className="feature-text">
                            <span className="uppercase blue_text">{secFeatureTxt}</span>
                        </div>
                        <Title title={secHeading} classes={`${id}-main-heading nr-section-main-heading m-0 m-block-20`} headingTag={titleTag} />
                    </div> */}
                    <div className={`nr-section-body ${id}-body`}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}