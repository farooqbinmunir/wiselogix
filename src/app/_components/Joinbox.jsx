export default function Joinbox() {
  return (
    <div id="joinusbox" className="joinusbox header">
      <div
        className="joinus_wrap"
        role="dialog"
        aria-modal="true"
        aria-labelledby="joinusform-header-title"
      >
        <div className="search_inner">
          <span
            className="modal-focus-trap"
            aria-hidden="true"
            id="joinus-top"
            tabIndex="0"
            data-target="joinus-close"
          ></span>
          <h3 id="joinusform-header-title" className="sr-only">
            Sign up
          </h3>

          <form
            id="joinusform_header"
            method="get"
            action="#"
            className="en__component en__component--page joinus-form"
            target="_self"
          >
            {/*<!-- first name -->*/}
            <div className="en__field en__field--text en__field--306158 en__field--firstName en__mandatory">
              <div className="en__field__element en__field__element--text ">
                <label htmlFor="en__field_supporter_firstName_inheader">
                  First Name (required)
                </label>
                <input
                  autoComplete="given-name"
                  id="en__field_supporter_firstName_inheader"
                  required
                  aria-required="true"
                  type="text"
                  className="join_input en__field__input en__field__input--text"
                  name="supporter.firstName"
                  defaultValue=""
                />
              </div>
            </div>

            {/*<!-- last name -->*/}
            <div className="en__field en__field--text en__field--306160 en__field--lastName en__mandatory">
              <div className="en__field__element en__field__element--text">
                <label htmlFor="en__field_supporter_lastName_inheader">
                  Last Name (required)
                </label>
                <input
                  autoComplete="family-name"
                  id="en__field_supporter_lastName_inheader"
                  required
                  aria-required="true"
                  type="text"
                  className="join_input en__field__input en__field__input--text"
                  name="supporter.lastName"
                  defaultValue=""
                />
              </div>
            </div>

            {/*<!-- email -->*/}
            <div className="en__field en__field--text en__field--306159 en__field--emailAddress en__mandatory">
              <div className="join_inputen__field__element en__field__element--text">
                <label htmlFor="en__field_supporter_emailAddress_inheader">
                  E-mail Address (required)
                </label>
                <input
                  autoComplete="email"
                  id="en__field_supporter_emailAddress_inheader"
                  required
                  aria-required="true"
                  type="text"
                  className="join_input en__field__input en__field__input--text"
                  name="supporter.emailAddress"
                  defaultValue=""
                />
              </div>
            </div>

            {/*<!-- opt in -->*/}
            <div className="en__field en__field--checkbox en__field--question en__field--147505 en__field--opt-in">
              <div className="en__field__element en__field__element--checkbox">
                <div className="en__field__item">
                  <label
                    htmlFor="en__field_supporter_questions_147505_inheader"
                    className="en__field__label en__field__label--item joinus-form--desc"
                  >
                    <input
                      type="hidden"
                      name="supporter.questions.147505"
                      className="en__field_supporter_questions_147505_control"
                      defaultValue="N"
                    />
                    <input
                      id="en__field_supporter_questions_147505_inheader"
                      type="checkbox"
                      className="en__field__input en__field__input--checkbox"
                    />
                    I would like to receive email updates from Oxfam Canada. I
                    understand I can unsubscribe at any time.
                  </label>
                  <script>
                    document.getElementById('en__field_supporter_questions_147505_inheader')
                  </script>
                </div>
              </div>
            </div>

            <div className="en__submit">
              <button
                id="joinus_form_submit_header"
                className="joinus_form_submit header oxfam_button oxfam_orange_button"
              >
                Sign Up
              </button>
            </div>
          </form>
          <button id="joinus-close" className="joinus_close" aria-label="Close">
            <i className="fas fa-times" aria-hidden="true"></i>
          </button>

          <span
            className="modal-focus-trap"
            aria-hidden="true"
            id="joinus-bottom"
            tabIndex="0"
            data-target="search"
          ></span>
        </div>
      </div>
    </div>
  );
}
