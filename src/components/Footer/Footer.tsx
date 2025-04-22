import React from "react";
import styles from "./Footer.module.scss";
import AppDownloadButtons from "../AppDownloadButtons/AppDownloadButtons";
import FooterColumnTitle from "./FooterColumnTitle/FooterColumnTitle";
import LinkItem from "../LinkItem/LinkItem";
import SocialIcons from "./SocialIcons/SocialIcons";

interface FooterColumn {
  title: string; // Заголовок колонки
  links?: { text: string; href: string }[]; // Массив ссылок
}

interface FooterProps {
  columns: FooterColumn[]; // Массив колонок
  socialIcons?: string[]; // Массив иконок соцсетей
  subscribeButtonLabel?: string; // Текст кнопки подписки
}

const Footer: React.FC<FooterProps> = ({
  columns,
  socialIcons,
  subscribeButtonLabel,
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
        {subscribeButtonLabel && (
          <div className={styles.column}>
            <FooterColumnTitle title="Подписка на новости" />
            <p>
              Получайте все самые последние новости о мероприятиях в
              Экспофоруме.
            </p>
            <form className={styles.subscribeForm}>
              <input
                type="email"
                placeholder="Введите ваш e-mail"
                className={styles.subscribeInput}
              />
              <button type="submit" className={styles.subscribeButton}>
                {subscribeButtonLabel}
              </button>
            </form>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
