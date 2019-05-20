const getDiscussURL = (url, postSlug) =>
  `https://mobile.twitter.com/search?q=${url}${postSlug}`;

export default getDiscussURL;
