import FooterColumnTitle from "../Footer/FooterColumnTitle/FooterColumnTitle";
import styles from "./AppDownloadButtons.module.scss";

const AppDownloadButtons = () => {
  return (
    <div className={styles.downloadButtons}>
      <FooterColumnTitle title="Приложение" />
      <div className={styles.downloadButton}>
        <a href="/">
          <img
            src="../../../public/img/socials/as.png"
            alt="Загрузить в AppStore"
            className={styles.appStoreIcon}
          />
        </a>
      </div>
      <div className={styles.downloadButton}>
        <a href="/">
          <img
            src="../../../public/img/socials/gp.png"
            alt="Доступно в Google Play"
            className={styles.googlePlayIcon}
          />
        </a>
      </div>
    </div>
  );
};

export default AppDownloadButtons;
