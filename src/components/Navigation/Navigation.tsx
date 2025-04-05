import styles from "./Navigation.module.scss";

interface NavigationProps {
  items: string[];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <nav className={styles.headerNav}>
      <ul className={styles.navList}>
        {items.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <a href={`#${item.toLowerCase()}`} className={styles.navLink}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
