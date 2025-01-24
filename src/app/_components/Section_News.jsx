import Hgroup from "./Hgroup";
import Slider_News from "./Slider_News";
export default function Section_News({cls="", style={}}){
    return (
        <>
            <div id="section_news" className={`${cls} fl-row fl-row-full-width fl-row-bg-color fl-node-y054nebhsr8a fl-row-default-height fl-row-align-center`} data-node="y054nebhsr8a" style={style}>
                <div className="fl-row-content-wrap">
                    <div className="fl-row-content fl-row-fixed-width fl-node-content">

                        <div className="fl-col-group fl-node-hksxy8i4dzbq news-section-wrap" data-node="hksxy8i4dzbq">

                            <div className="fl-col fl-node-l4qsjirgzc8x" data-node="l4qsjirgzc8x">
                                <div className="fl-col-content fl-node-content">
                                    <Hgroup 
                                        headingTxt="Stay Updated on Women’s Rights"
                                        textHighlight="Recent News"
                                        paraTxt="Get the latest updates on stories, initiatives, and progress in the fight for women’s equality worldwide."
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