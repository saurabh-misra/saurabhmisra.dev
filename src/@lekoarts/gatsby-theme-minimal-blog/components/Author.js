import React from 'react';

export default function Author() {
  return (
    <div className="author">
      <hr />
      <br />
      <div className="flex-container">
        <div>
          <div className="pic"></div>
        </div>
        <div className="content-container">
          <p className="main-content">
            Namaste🙏! I'm <strong>Saurabh Misra</strong>, a full-stack software developer. 
          </p> 
          <p className="sub-content">
            I write articles and tutorials about full-stack software development mostly using Javascript, ReactJS and NodeJS. If that is something that interests you, then you are more than welcome to subscribe to my newsletter.
          </p>
          <form
            action="https://buttondown.email/api/emails/embed-subscribe/saurabhmisra.dev"
            method="post"
            target="popupwindow"
            onsubmit="window.open('https://buttondown.email/saurabhmisra.dev', 'popupwindow')"
            class="embeddable-buttondown-form"
          >
            <input type="email" name="email" id="bd-email" placeholder="johnwick@example.com" />
            <input type="hidden" value="1" name="embed" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </div>
  )
}