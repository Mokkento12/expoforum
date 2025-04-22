import React from "react";
import styles from "./SocialIcon.module.scss";

interface SocialIcon {
  name: string; // Название соцсети (например, "vk", "facebook")
}

interface SocialIconsProps {
  icons: SocialIcon[]; // Массив иконок
}

const SocialIcons: React.FC<SocialIconsProps> = ({ icons }) => {
  return (
    <div className={styles.socialIcons}>
      {icons.map((icon, index) => (
        <a
          key={index}
          href={`https://${icon.name}.com`}
          className={styles.socialIconLink}
          title={icon.name}
        >
          <img
            src={`/img/socials/${icon.name.toLowerCase()}.png`}
            alt={icon.name}
            className={styles.socialIcon}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
