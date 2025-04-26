import React, { useState } from "react";
import FooterColumnTitle from "../Footer/FooterColumnTitle/FooterColumnTitle";
import styles from "./Newsletter.module.scss";
import { validateEmail } from "../utils/validateEmail";
import PopupNotice from "../PopupNotice/PopupNotice";

interface NewsletterProps {
  description: string;
}

const Newsletter: React.FC<NewsletterProps> = ({ description }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const error = validateEmail(email);

    if (error) {
      setErrorMessage(error);
      setStatus("error");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setErrorMessage(null);
      setIsNoticeOpen(true);
      setEmail("");
    }, 1000);
  };

  return (
    <div className={styles.newsletter}>
      <FooterColumnTitle title="Подписка на новости" />
      <p className={styles.newsletterDescription}>{description}</p>

      <form className={styles.subscribeForm} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Введите ваш e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.subscribeInput}
          aria-describedby="email-error"
          aria-invalid={!!errorMessage}
        />
        {errorMessage && (
          <div id="email-error" className={styles.errorMessage}>
            {errorMessage}
          </div>
        )}
        <button type="submit" className={styles.subscribeButton}>
          {status === "loading" ? (
            "..."
          ) : (
            <img src="/img/submit.png" alt="Submit" />
          )}
        </button>
      </form>
      {isNoticeOpen && (
        <PopupNotice
          isOpen={isNoticeOpen}
          message="Подписка оформлена. Спасибо!"
          onClose={() => setIsNoticeOpen(false)}
        />
      )}
    </div>
  );
};

export default Newsletter;
