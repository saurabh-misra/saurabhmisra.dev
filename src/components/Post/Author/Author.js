// @flow
import React from "react";
import { withPrefix, Link } from "gatsby";
import { getContactHref } from "../../../utils";
import styles from "./Author.module.scss";
import { useSiteMetadata } from "../../../hooks";
import Contacts from "../../Sidebar/Contacts";

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles["author"]}>
      <Link to="/">
        <img
          src={withPrefix(author.photo)}
          className={styles["author__photo"]}
          width="75"
          height="75"
          alt={author.name}
        />
      </Link>
      <div className={styles["author__info"]}>
        <Link className={styles["author__title-link"]} to="/">
          <strong>{author.name}</strong>
        </Link>
        <p className={styles["author__bio"]}>{author.bio}</p>
        <Contacts contacts={author.contacts} />
      </div>
    </div>
  );
};

export default Author;
