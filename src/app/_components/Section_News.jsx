import Hgroup from "./Hgroup";
import Slider_News from "./Slider_News";
import client from '../../../config.js';
export default async function Section_News({cls="", style={}}){
    const newsHeaderQuery = `{
        page(id: "home", idType: URI) {
            homeRecentNews {
                recentNewsHeading
                recentNewsSubheadingHighlighted
                recentNewsDesc
            }
        }
    }`;
    const {page: {homeRecentNews: newsHeader}} = await client.request(newsHeaderQuery);
    return (
        <>
            <div id="section_news" className={`${cls} fl-row fl-row-full-width fl-row-bg-color fl-node-y054nebhsr8a fl-row-default-height fl-row-align-center`} data-node="y054nebhsr8a" style={style}>
                <div className="fl-row-content-wrap">
                    <div className="fl-row-content fl-row-fixed-width fl-node-content">

                        <div className="fl-col-group fl-node-hksxy8i4dzbq news-section-wrap" data-node="hksxy8i4dzbq">

                            <div className="fl-col fl-node-l4qsjirgzc8x" data-node="l4qsjirgzc8x">
                                <div className="fl-col-content fl-node-content">
                                    <Hgroup 
                                        headingTxt={newsHeader.recentNewsHeading}
                                        textHighlight={newsHeader.recentNewsSubheadingHighlighted}
                                        paraTxt={newsHeader.recentNewsDesc}
                                        cls="fl-node-ylnt90hi3vwc"
                                        style={{width: '60%'}}
                                    />
                                </div>
                                <Slider_News />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}