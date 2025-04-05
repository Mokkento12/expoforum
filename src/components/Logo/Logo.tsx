import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      <img src="../../../public/img/logo.png" alt="Logo" />
    </a>
  );
};

export default Logo;
