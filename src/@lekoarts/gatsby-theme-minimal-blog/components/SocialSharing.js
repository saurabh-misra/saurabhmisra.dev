import React from 'react';

export default function SocialSharing({ title }) {
  const twitterText = encodeURIComponent( `I just read "${title}" by @saurabh__misra\n\n` );
  const twitterLink = `https://twitter.com/intent/tweet?url=${window.location.href}&text=${twitterText}`;

  const mailToSubject = encodeURIComponent( `Re: the blog post titled "${title}"` );
  const mailToLink = `mailto:hello@saurabhmisra.dev?subject=${ mailToSubject }`;

  return (
    <div className="social-sharing">
      <hr />
      <div>
        <p>
          If you liked this post, please consider sharing it with your friends on social media or email me your feedback as a testimonial. It'll really make my day! Thank you so much for supporting this blog🤜🤛! 
        </p>

        <p className="social-sharing-links">
          <a href={twitterLink} target="_blank" rel="noopener noreferrer">Share this post on Twitter</a>
          <a href={mailToLink} className="testimonial-link">Email me a testimonial</a>
        </p>

        <p className="social-follow-links">
          <span className="follow-me">Follow me on:</span>&nbsp; 
          <a href="https://twitter.com/saurabh__misra" target="_blank" rel="noopener noreferrer">Twitter</a>&nbsp;&middot;&nbsp;
          <a href="https://www.linkedin.com/in/saurabh--misra/" target="_blank" rel="noopener noreferrer">LinkedIn</a>&nbsp;&middot;&nbsp;
          <a href="https://github.com/saurabh-misra" target="_blank" rel="noopener noreferrer">Github</a>
        </p>
      </div>
    </div>
  )
}