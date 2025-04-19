// src/components/Footer/Footer.tsx
import React from "react";
import styles from "./Footer.module.scss";

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
            <h3>{column.title}</h3>
            {column.links && (
              <ul className={styles.linkList}>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className={styles.linkItem}>
                    <a href={link.href} className={styles.link}>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Социальные сети */}
        {socialIcons && (
          <div className={styles.column}>
            <h3>Мы в соц. сетях</h3>
            <div className={styles.socialIcons}>
              {socialIcons.map((icon, iconIndex) => (
                <a
                  key={iconIndex}
                  href={`https://${icon}.com`}
                  className={styles.socialIconLink}
                >
                  <img
                    src={`/img/${icon.toLowerCase()}.png`}
                    alt={icon}
                    className={styles.socialIcon}
                  />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Подписка на новости */}
        {subscribeButtonLabel && (
          <div className={styles.column}>
            <h3>Подписка на новости</h3>
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
