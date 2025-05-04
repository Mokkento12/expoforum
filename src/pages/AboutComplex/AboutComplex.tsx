import styles from "./AboutComplex.module.scss";

const AboutComplex = () => {
  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.title}>О комплексе</h1>
      <p className={styles.description}>
        {" "}
        Здесь будет описание конгрессно-выставочного центра ЭКСПОФОРУМ.
        Санкт-Петербург.
      </p>
    </div>
  );
};

export default AboutComplex;
