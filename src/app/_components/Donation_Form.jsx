import Donate_Button from "./Donate_Button";
import Button from "./Button";
export default function Donation_Form({cls=""}) {
	return (
		<div id="donation_form" className={`${cls} donation_form donation_standard`}>
			<form method="get" target="_self" action="#" aria-labelledby="donation_form_heading">
				<input type="hidden" name="transaction.donationAmt" defaultValue="150" />
				<fieldset className="donate_first_row">
					<legend className="sr-only">Select Donation Amount</legend>
					<input type="radio" id="donate_form_amount_option_100" name="donate_form_amount" defaultValue="100" />
					<label className="donate_radio_button_label" htmlFor="donate_form_amount_option_100">$100</label>
					<input type="radio" id="donate_form_amount_option_150" name="donate_form_amount" defaultValue="150" defaultChecked />
					<label className="donate_radio_button_label" htmlFor="donate_form_amount_option_150">$150</label>
					<input type="radio" id="donate_form_amount_option_250" name="donate_form_amount" defaultValue="250" />
					<label className="donate_radio_button_label" htmlFor="donate_form_amount_option_250">$250</label>
					<input type="radio" id="donate_form_amount_option_other" name="donate_form_amount" defaultValue="other" />
					<label className="donate_radio_button_label" htmlFor="donate_form_amount_option_other">Other</label>
				</fieldset>
				<div className="donate_second_row">
					<div className="donate_other_outer_wrapper" style={{visibility: "hidden"}}>
						<div className="donate_other_inner_wrapper">
							<label htmlFor="donate_form_amount_other">Amount (Canadian Dollars):</label>
							<input type="text" name="amount_other" id="donate_form_amount_other" maxLength="5" inputMode="numeric" />
						</div>
					</div>
                    <Button btnTxt="Donate Now" cls="donate_submit_button" fullWidth={true} />
				</div>
			</form>
		</div>
	);
}
