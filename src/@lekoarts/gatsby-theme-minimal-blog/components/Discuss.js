import React from 'react';

export default function SocialSharing() {
  const link = `https://twitter.com/search?q=${ encodeURIComponent( window.location.href ) }`;

  return (
    <p className="discuss-on-twitter">
      <a href={link} target="_blank">Discuss on Twitter</a>
    </p>
  )
}