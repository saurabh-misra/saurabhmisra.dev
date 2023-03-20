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
            I have been building software since 14 years. This blog serves as a means for me to share my knowledge and expertise with the software development community. I write tutorials based on JavaScript, PHP, SQL Server and Wordpress. If you're interested in getting notified when I write something new, you're more than welcome to subscribe to my newsletter. No spam. Unsubscribe at any time.
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