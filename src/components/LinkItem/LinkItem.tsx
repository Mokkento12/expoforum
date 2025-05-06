import { NavLink } from "react-router-dom";
import styles from "./LinkItem.module.scss";

interface LinkItemProps {
  href: string;
  text: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, text }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      {text}
    </NavLink>
  );
};

export default LinkItem;
