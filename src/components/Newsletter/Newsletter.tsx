import React from "react";
import FooterColumnTitle from "../Footer/FooterColumnTitle/FooterColumnTitle";
import styles from "./Newsletter.module.scss";

interface NewsletterProps {
  description: string;
}

const Newsletter: React.FC<NewsletterProps> = ({ description }) => {
  return (
    <div className={styles.newsletter}>
      <FooterColumnTitle title="Подписка на новости" />
      <p className={styles.newsletterDescription}>{description}</p>

      <form className={styles.subscribeForm}>
        <input
          type="email"
          placeholder="Введите ваш e-mail"
          className={styles.subscribeInput}
        />
        <button type="submit" className={styles.subscribeButton}>
          <img src="/img/submit.png" alt="Submit" />
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
