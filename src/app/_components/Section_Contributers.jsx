import Hgroup from "./Hgroup";
import Button from "./Button";
import Contributer_Coutner_Item from "./Contributer_Coutner_Item";
export default function Section_Contributers({cls=""}) {
    const counterItems = [
        {
            counter_target_no: 11.5,
            counter_title: "million",
            counter_icon_url: "assets/images/oxfam-urgent-assistance-icon.svg",
            counter_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },{
            counter_target_no: 15.5,
            counter_title: "million",
            counter_icon_url: "assets/images/icon-woman-girl.svg",
            counter_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },{
            counter_target_no: 15.4,
            counter_title: "million",
            counter_icon_url: "assets/images/oxfam-action-icon.svg",
            counter_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        }
    ];
    return (
        <div id="section_contributers" className={`${cls} contributers_section fl-row fl-row-full-width fl-row-bg-color fl-node-he9f0muoi4yc fl-row-default-height fl-row-align-center`} data-node="he9f0muoi4yc">
            <div className="fl-row-content-wrap">
                <div className="fl-row-content fl-row-fixed-width fl-node-content">

                    <div className="fl-col-group fl-node-lcek2916r4b5" data-node="lcek2916r4b5">
                        <div className="fl-col fl-node-p8qzoxa42y71 fl-col-small" data-node="p8qzoxa42y71">
                            <div className="fl-col-content fl-node-content contributers_text_section">
                                <Hgroup 
                                    headingTxt="Your Contribution Brings Hope to Those in" 
                                    paraTxt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus." 
                                    textHighlight="Need."
                                />
                                <Button btnTxt="Report Button 1" link="#" />
                                <Button btnTxt="Report Button 2" link="#" />
                            </div>
                        </div>
                        <div className="fl-col fl-node-fiv6lqsm075a fl-col-small fl-col-has-cols">
                            <div className="fl-col-content fl-node-content">
                                {counterItems.map((item, index) => <Contributer_Coutner_Item key={index} item={item} /> )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}