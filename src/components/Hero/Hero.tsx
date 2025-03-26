import styles from "./Hero.module.scss";

interface SquareProps {
  title: string;
  link: string;
  color: string;
}

const squaresData: SquareProps[] = [
  {
    title: "Календарь мероприятий",
    link: "Подробнее",
    color: "rgb(35, 120, 252)",
  },
  {
    title: "Как добраться до Экспофорума",
    link: "Подробнее",
    color: "rgb(48, 188, 201)",
  },
  {
    title: "Онлайн-заявка на организацию мероприятия",
    link: "Подробнее",
    color: "rgb(255, 196, 30)",
  },
  {
    title: "План и инфраструктура комплекса",
    link: "Подробнее",
    color: "rgb(246, 64, 79)",
  },
];

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
        <div className={styles.rightBlock}>
          {squaresData.map((square, index) => (
            <div
              key={index}
              className={styles.square}
              style={{ backgroundColor: square.color }}
            >
              <a href={square.link} className={styles.squareLink}>
                {square.title} <span className={styles.arrow}>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
