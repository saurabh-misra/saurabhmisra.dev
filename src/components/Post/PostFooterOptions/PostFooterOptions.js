import React from "react";
import { useSiteMetadata } from "../../../hooks";
import { getDiscussURL, getEditPostURL } from "../../../utils";
import styles from "./PostFooterOptions.module.scss";

const PostFooterOptions = ({ postSlug, date }) => {
  const { url } = useSiteMetadata();
  const twitterDiscussUrl = getDiscussURL(url, postSlug);
  const editPostUrl = getEditPostURL(date, postSlug);

  return (
    <div className={styles["options"]}>
      <a href={twitterDiscussUrl} target="_blank">
        Discuss on Twitter
      </a>
      {" • "}
      <a href={editPostUrl} target="_blank">
        Edit Post on Github
      </a>
    </div>
  );
};

export default PostFooterOptions;
