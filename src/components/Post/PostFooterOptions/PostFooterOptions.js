import React from "react";
import { useSiteMetadata } from "../../../hooks";
import { getDiscussURL } from "../../../utils";
import styles from "./PostFooterOptions.module.scss";

const PostFooterOptions = ({ postSlug }) => {
  const { url } = useSiteMetadata();
  const twitterDiscussUrl = getDiscussURL(url, postSlug);

  return (
    <div className={styles["options"]}>
      <a href={twitterDiscussUrl} target="_blank">
        Discuss on Twitter
      </a>
    </div>
  );
};

export default PostFooterOptions;
