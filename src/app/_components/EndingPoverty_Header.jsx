import Hgroup from "./Hgroup";
import client from "../../../config.js";
export default async function EndingPoverty_Header({cls = ""}) {

    const endingPovertyHeaderQuery = `{
        page(id: "home", idType: URI) {
            homeEndingPovertySection {
                endingPovertyTitle
                endingPovertyHighlightedSubheading
                endingPovertyDescription
            }
        }
    }`;

    const {page: {homeEndingPovertySection: endingPoverty}} = await client.request(endingPovertyHeaderQuery);

    return (
        <div id="section_ending_poverty_header" className={`${cls} fl-row fl-row-full-width fl-row-bg-none fl-node-n4xazeg3chu6 fl-row-default-height fl-row-align-center`} data-node="n4xazeg3chu6">
            <div className="fl-row-content-wrap">
                <div className="fl-row-content fl-row-fixed-width fl-node-content">
                    <div className="fl-col-group fl-node-b2yachp5vsf8" data-node="b2yachp5vsf8">
                        <div className="fl-col fl-node-l5zxri1gmafd" data-node="l5zxri1gmafd">
                            <div className="fl-col-content fl-node-content">
                                <Hgroup 
                                    headingTxt={endingPoverty.endingPovertyTitle} 
                                    paraTxt={endingPoverty.endingPovertyDescription} 
                                    textHighlight={endingPoverty.endingPovertyHighlightedSubheading} 
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