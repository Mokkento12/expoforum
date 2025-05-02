import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { translations } from "../../features/locales";

const Header: React.FC = () => {
  const language = useSelector((state: RootState) => state.language.current);

  const t = translations[language];

  const headerNavItems = [
    t.navAboutComplex,
    t.navAboutCompany,
    t.navNews,
    t.navMediaBank,
    t.navContacts,
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo />
        <Navigation items={headerNavItems} />
        <div className={styles.rightBar}>
          <Search />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
