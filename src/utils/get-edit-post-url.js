const getEditPostURL = (date, postSlug) => {
  const prefix = new Date(date).toISOString().split("T")[0];
  const postSlugPieces = postSlug.split("/");
  const postFilePath = `/${postSlugPieces[1]}/${prefix}---${
    postSlugPieces[2]
  }.md`;
  return `https://github.com/saurabh-misra/saurabhmisra.dev/edit/master/content${postFilePath}`;
};

export default getEditPostURL;
