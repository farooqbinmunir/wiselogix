import Hgroup from "./Hgroup";
export default function EndingPoverty_Header({cls = ""}) {
    const headerInfo = {
        title: "Ending Poverty, Promoting Equality.",
        highlightedText: "United for Change.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus. Sed bibendum nisl non nulla dictum scelerisque. Integer ac libero orci. Quisque posuere ante nec nibh sodales dictum:"
    };
    return (
        <div id="section_ending_poverty_header" className={`${cls} fl-row fl-row-full-width fl-row-bg-none fl-node-n4xazeg3chu6 fl-row-default-height fl-row-align-center`} data-node="n4xazeg3chu6">
            <div className="fl-row-content-wrap">
                <div className="fl-row-content fl-row-fixed-width fl-node-content">
                    <div className="fl-col-group fl-node-b2yachp5vsf8" data-node="b2yachp5vsf8">
                        <div className="fl-col fl-node-l5zxri1gmafd" data-node="l5zxri1gmafd">
                            <div className="fl-col-content fl-node-content">
                                <Hgroup 
                                    headingTxt={headerInfo.title} 
                                    paraTxt={headerInfo.desc} 
                                    textHighlight={headerInfo.highlightedText} 
                                    textAlign="center" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}