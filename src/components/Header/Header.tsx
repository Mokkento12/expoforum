import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";

const headerNavItems = [
  "О комплексе",
  "О компании",
  "Новости",
  "Медиа-банк",
  "Контакты",
];

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Лого */}
        <Logo />
        {/* Навигация */}
        <Navigation items={headerNavItems} />
        <div className={styles.rightBar}>
          {/* Поиск */}
          <Search />
          {/* Язык */}
          <div className={styles.language}>
            <img src="../../../public/img/globe.png" alt="Globe" />
            {/* <button className={styles.languageButton} disabled>
              RU
            </button> */}
            <button className={styles.languageButton} disabled>
              English
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
