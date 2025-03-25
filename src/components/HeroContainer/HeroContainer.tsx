import Header from "../Header/Header";
import styles from "./HeroContainer.module.scss";

const HeroContainer = () => {
  return (
    <div className={styles.heroContainer}>
      <Header title="expoforum" />
    </div>
  );
};

export default HeroContainer;
