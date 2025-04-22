import React from "react";
import styles from "./LinkItem.module.scss";

interface LinkItemProps {
  href: string;
  text: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, text }) => {
  return (
    <a href={href} className={styles.link}>
      {text}
    </a>
  );
};

export default LinkItem;
