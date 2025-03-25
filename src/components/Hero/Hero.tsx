import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.leftBlock}>
          <h2 className={styles.heroTitle}>ЭКСПОФОРУМ</h2>
          <p className={styles.heroDesc}>
            конгрессно-выставочный центр Санкт-Петербурга
          </p>
          <a href="/" className={styles.heroLink}>
            О комплексе <span className={styles.arrow}>→</span>
          </a>
        </div>
        <div className={styles.rightBlock}>RIGHT BLOCK</div>
      </div>
    </section>
  );
};

export default Hero;
