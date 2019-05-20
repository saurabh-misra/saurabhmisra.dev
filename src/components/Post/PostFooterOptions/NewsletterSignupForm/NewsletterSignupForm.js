import React from "react";
import Helmet from "react-helmet";
import jQuery from "jquery";

class NewsletterSignupForm extends React.Component {
  componentDidMount() {
    (function($) {
      window.fnames = new Array();
      window.ftypes = new Array();
      fnames[0] = "EMAIL";
      ftypes[0] = "email";
      fnames[1] = "FNAME";
      ftypes[1] = "text";
      fnames[2] = "LNAME";
      ftypes[2] = "text";
      fnames[3] = "ADDRESS";
      ftypes[3] = "address";
      fnames[4] = "PHONE";
      ftypes[4] = "phone";
      fnames[5] = "BIRTHDAY";
      ftypes[5] = "birthday";
    })(jQuery);
    var $mcj = jQuery.noConflict(true);
  }

  render() {
    return (
      <div>
        <Helmet>
          <link
            href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
            rel="stylesheet"
            type="text/css"
          />
          <script
            type="text/javascript"
            src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
          />
        </Helmet>
        <div id="mc_embed_signup" style={{ backgroundColor: "aliceblue" }}>
          <form
            action="https://gmail.us20.list-manage.com/subscribe/post?u=f7543eb65315caae2cfccc9e1&amp;id=7e935aba1d"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate=""
          >
            <div id="mc_embed_signup_scroll">
              <h2>Join the Newsletter</h2>
              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">First Name </label>
                <input
                  type="text"
                  defaultValue=""
                  name="FNAME"
                  className="required"
                  id="mce-FNAME"
                />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">Email Address </label>
                <input
                  type="email"
                  defaultValue=""
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                />
              </div>
              <div
                id="mce-responses"
                className="clear"
                style={{ paddingLeft: 0, marginLeft: 0 }}
              >
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                />
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                />
              </div>{" "}
              {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
              <div
                style={{ position: "absolute", left: -5000 }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_f7543eb65315caae2cfccc9e1_7e935aba1d"
                  tabIndex="-1"
                  defaultValue=""
                />
              </div>
              <div className="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  style={{ backgroundColor: "#f7a046" }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewsletterSignupForm;
