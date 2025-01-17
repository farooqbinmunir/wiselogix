import Image from "next/image";
import Fyllan from '../_assets/images/fyllan.png';
import {Para, Title} from '../exports';
export default function ModelPopup({id}){
    const short_desc = `Through a wide variety of mobile applications, we’ve developed a unique visual system.`;
    const long_desc = `Fyllan is a foodie website that allows users to order the food of their choice from different restaurants. The project includes website designing, custom CMS system development, and Web development.Welcome to our project overview page. This page provides a concise overview of our project, outlining its goals, objectives, scope, and expected outcomes. We invite you to explore the details and significance of this initiative to gain a clear understanding of its importance and impact`;
    return(
        <>
            <div id={id} className={`popup-model model-${id}`}>
                <div className="model-container">
                    <div className="model-inner">
                        <div className="mode-banner d-flex align-items-center">
                            <div className="model-banner-img">
                                <div className="model-banner-img-wrap">
                                    <Image className="model-banner-img-element" src={Fyllan} alt="Fyllan" title="Fyllan" width="400" height="300" />
                                </div>
                            </div>
                            <div className="model-banner-meta">
                                <div className="model-banner-meta-wrap">
                                    <Title title="Fyllan" classes="model-banner-title" />
                                    <Para text={short_desc} classes="model-banner-short-desc" />
                                    <div className="model-banner-btns">
                                        <div className="model-banner-btn-wrap">
                                            <button type="button" className="model-banner-like-btn uppercase">Like this 504</button>
                                            <button type="button" className="model-banner-view-project-btn uppercase">View Project</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="model-detail"></div>
                    </div>
                </div>
            </div>
        </>
    );
}