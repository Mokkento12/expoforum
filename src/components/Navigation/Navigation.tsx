import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

interface NavigationProps {
  items: string[];
}

const pathsMap: Record<string, string> = {
  "О комплексе": "/about-complex",
  "О компании": "/about-company",
  Новости: "/news",
  "Медиа-банк": "/media-bank",
  Контакты: "/contacts",
};

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <nav className={styles.headerNav}>
      <ul className={styles.navList}>
        {items.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <NavLink to={pathsMap[item]} className={styles.navLink}>
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
