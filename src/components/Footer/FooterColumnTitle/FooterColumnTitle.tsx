import React from "react";
import styles from "./FooterColumnTitle.module.scss";

interface FooterColumnTitleProps {
  title: string; // Текст заголовка
}

const FooterColumnTitle: React.FC<FooterColumnTitleProps> = ({ title }) => {
  return <h3 className={styles.columnTitle}>{title}</h3>;
};

export default FooterColumnTitle;
