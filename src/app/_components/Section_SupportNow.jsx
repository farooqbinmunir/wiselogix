import Image from 'next/image';
import Hgroup from "./Hgroup";
import Donation_Form from "./Donation_Form";
import Photo_Credit from "./Photo_Credit";

export default function Section_SupportNow({cls=""}) {
    return (
        <div id="section_support_now" className={`${cls} fl-row fl-row-full-width fl-row-bg-photo fl-node-7om1xrwdbjes fl-row-default-height fl-row-align-center hp2023_donate_form_new`} data-node="7om1xrwdbjes">
            <div className="fl-row-content-wrap">
                <div className="fl-row-content fl-row-fixed-width fl-node-content">

                    <div className="fl-col-group fl-node-jo0av3rmdsx5" data-node="jo0av3rmdsx5">
                        <div className="fl-col fl-node-2nzryj3qg6p9 fl-col-has-cols hp2023 hero_box"
                            data-node="2nzryj3qg6p9">
                            <div className="fl-col-content fl-node-content">
                                <div className="fl-col-group fl-node-qxro7z653yg9 fl-col-group-nested fl-col-group-equal-height fl-col-group-align-top fl-col-group-custom-width" data-node="qxro7z653yg9">
                                    <div className="fl-col fl-node-2zl68jk07qbs fl-col-small-custom-width" data-node="2zl68jk07qbs">
                                        <div className="fl-col-content fl-node-content">
                                            <div className="fl-module fl-module-photo fl-node-nvplxhwa3ck2" data-node="nvplxhwa3ck2">
                                                <div className="fl-module-content fl-node-content">
                                                    <div className="fl-photo fl-photo-align-left"
                                                    itemScope
                                                    itemType="https://schema.org/ImageObject">
                                                    <div
                                                        className="fl-photo-content fl-photo-img-svg">
                                                        <Image loading="lazy" decoding="async"
                                                        className="fl-photo-img wp-image-43129 size-full"
                                                        src="assets/images/icon_new_heart.svg"
                                                        alt="icon_new_heart"
                                                        itemProp="image" 
                                                        height="54"
                                                        width="64"
                                                        title="icon_new_heart" />
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Hgroup headingTxt="Be the Difference for Women Everywhere" paraTxt="Your contribution helps us act quickly. Support our mission monthly for lasting change." textHighlight="Support Now." />
                                        </div>
                                    </div>
                                    <div className="fl-col fl-node-32w9ctl4eg7x fl-col-small" data-node="32w9ctl4eg7x">
                                        <div className="fl-col-content fl-node-content">
                                            <div className="fl-module fl-module-html fl-node-187lam3g6hct" data-node="187lam3g6hct">
                                                <div className="fl-module-content fl-node-content">
                                                    <div className="fl-html">
                                                        <Donation_Form />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Photo_Credit />
                </div>
            </div>
        </div>
    );
}