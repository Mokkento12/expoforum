import { useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

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

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Лого */}
        <Logo />
        {/* Навигация */}
        <Navigation items={headerNavItems} />
        <div className={styles.rightBar}>
          {/* Поиск */}
          <div className={styles.search}>
            <button className={styles.searchButton} onClick={toggleSearch}>
              <img
                src="../../../public/img/search.png"
                alt="search"
                className={styles.searchIcon}
              />
            </button>
            {isSearchVisible && (
              <input
                type="text"
                placeholder="Поиск..."
                className={styles.searchInput}
                disabled
              />
            )}
          </div>
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
