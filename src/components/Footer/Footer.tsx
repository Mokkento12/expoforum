import React from "react";
import styles from "./Footer.module.scss";
import AppDownloadButtons from "../AppDownloadButtons/AppDownloadButtons";
import FooterColumnTitle from "./FooterColumnTitle/FooterColumnTitle";
import LinkItem from "../LinkItem/LinkItem";
import SocialIcons from "./SocialIcons/SocialIcons";
import Newsletter from "../Newsletter/Newsletter";

interface FooterColumn {
  title: string; // Заголовок колонки
  links?: { text: string; href: string }[]; // Массив ссылок
}

interface FooterProps {
  columns: FooterColumn[]; // Массив колонок
  socialIcons?: string[]; // Массив иконок соцсетей
  newsletterData?: {
    title: string; // Заголовок подписки
    description: string; // Описание
    buttonLabel: string; // Текст кнопки
  };
}

const Footer: React.FC<FooterProps> = ({
  columns,
  socialIcons,
  newsletterData,
}) => {
  return (
    <footer className={styles.footer}>
      {/* Разделяем на колонки */}
      <div className={styles.columns}>
        {columns.map((column, index) => (
          <div key={index} className={styles.column}>
            <FooterColumnTitle title={column.title} />
            {column.links && (
              <ul className={styles.linkList}>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className={styles.linkItem}>
                    <LinkItem href={link.href} text={link.text} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        {/* Приложение */}
        <div className={styles.column}>
          <FooterColumnTitle title="Приложение" />
          <AppDownloadButtons />
        </div>
        {/* Социальные сети */}
        {socialIcons && (
          <div className={styles.column}>
            <FooterColumnTitle title="Мы в соц. сетях" />
            <SocialIcons icons={socialIcons} />
          </div>
        )}

        {/* Подписка на новости */}
        {newsletterData && (
          <div className={styles.column}>
            <Newsletter
              title={newsletterData.title}
              description={newsletterData.description}
              buttonLabel={newsletterData.buttonLabel}
            />
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
