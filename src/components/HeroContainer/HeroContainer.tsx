import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import styles from "./HeroContainer.module.scss";

const HeroContainer = () => {
  return (
    <div className={styles.heroContainer}>
      <Header title="expoforum" />
      <Hero />
    </div>
  );
};

export default HeroContainer;
