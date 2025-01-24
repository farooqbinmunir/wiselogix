import Button from './Button';
export default function Section_Joius({cls="", style={}}){
    return (
        <>
        <div id="section_joinus" className="fl-row fl-row-full-width fl-row-bg-color fl-node-45nyhi8qz6lx fl-row-default-height fl-row-align-center joinus-form"cdata-node="45nyhi8qz6lx">
            <div className="fl-row-content-wrap">
                <div className="fl-row-content fl-row-fixed-width fl-node-content">

                    <div className="fl-col-group fl-node-9784chxfo53b" data-node="9784chxfo53b">
                        <div className="fl-col fl-node-y1hs9bzvd8cj fl-col-has-cols" data-node="y1hs9bzvd8cj">
                            <div className="fl-col-content fl-node-content">
                                <div className="fl-col-group fl-node-u34dx6ewkizp fl-col-group-nested fl-col-group-equal-height fl-col-group-align-center" data-node="u34dx6ewkizp">
                                    <div className="fl-col fl-node-hbyvit0ejc8g fl-col-small fl-visible-desktop fl-visible-large join_col1" data-node="hbyvit0ejc8g">
                                        <div className="fl-col-content fl-node-content">
                                            <div className="fl-module fl-module-html fl-node-xbaelpcwiuzf fl-slide-in-left" data-node="xbaelpcwiuzf" data-animation-delay="0" data-animation-duration="1">
                                                <div className="fl-module-content fl-node-content">
                                                    <div className="fl-html">
                                                        <h2 className="h2 white join-heading">Join Us</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fl-col fl-node-vl8hgzu6kiyo join_col2" data-node="vl8hgzu6kiyo">
                                        <div className="fl-col-content fl-node-content">
                                            <div className="fl-module fl-module-html fl-node-bx2yfi15wjog fl-visible-medium fl-visible-mobile join_mobile_title" data-node="bx2yfi15wjog">
                                                <div className="fl-module-content fl-node-content">
                                                    <div className="fl-html">
                                                        <h2>Join Us <i className="icon-oxfam-icon-right-arrow-plain"></i>
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fl-module fl-module-html fl-node-t07salnwdqh4" data-node="t07salnwdqh4">
                                                <div className="fl-module-content fl-node-content">
                                                    <div className="fl-html">
                                                        <form id="joinusform" method="get" action="#" className="en__component en__component--page joinusform" target="_self">
                                                            <div className="en__field en__field--text en__field--306158 en__field--firstName en__mandatory">
                                                                <div className="en__field__element en__field__element--text ">
                                                                    <label htmlFor="en__field_supporter_firstName">First Name*</label>
                                                                    <input id="en__field_supporter_firstName" type="text" className="join_input en__field__input en__field__input--text" name="supporter.firstName" autoComplete="given-name" required />
                                                                </div>
                                                            </div>
                                                            <div className="en__field en__field--text en__field--306160 en__field--lastName en__mandatory">
                                                            <div className="en__field__element en__field__element--text">
                                                                <label htmlFor="en__field_supporter_lastName">Last Name*</label>
                                                                <input id="en__field_supporter_lastName" type="text" className="join_input en__field__input en__field__input--text" name="supporter.lastName" autoComplete="family-name" required />
                                                            </div>
                                                            </div>
                                                            <div className="en__field en__field--text en__field--306159 en__field--emailAddress en__mandatory">
                                                            <div className="join_inputen__field__element en__field__element--text">
                                                                <label htmlFor="en__field_supporter_emailAddress">Email*</label>
                                                                <input id="en__field_supporter_emailAddress" type="text" className="join_input en__field__input en__field__input--text" name="supporter.emailAddress" autoComplete="email" required />
                                                            </div>
                                                            </div>
                                                            <div className="en__field en__field--checkbox en__field--question en__field--147505 en__field--opt-in">
                                                            <div className="en__field__element en__field__element--checkbox">
                                                                <div className="en__field__item">
                                                                <label className="en__field__label en__field__label--item joinus-form--desc" htmlFor="en__field_supporter_questions_147505">
                                                                    <input type="hidden" name="supporter.questions.147505" className="en__field_supporter_questions_147505_control" defaultValue="N" />
                                                                    <input id="en__field_supporter_questions_147505" type="checkbox" className="en__field__input en__field__input--checkbox" /> Accept, lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                </label>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <div className="en__submit">
                                                                <label>First Name*</label>
                                                                <Button btnTxt="Join Us" cls="joinus_button_submit" />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}