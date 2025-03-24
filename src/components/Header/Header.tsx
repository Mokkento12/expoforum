import styles from "./Header.module.scss";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <a href="/" className={styles.logo}>
          <img src="../../../public/img/logo.png" alt="Logo" />
        </a>
        <nav className="nav">
          <ul className="navList">
            <li className="navItem">
              <a href="/" className="navLink"></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
