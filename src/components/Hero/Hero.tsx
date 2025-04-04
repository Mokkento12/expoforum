import styles from "./Hero.module.scss";

interface SquareProps {
  linkTitle: string;
  href: string; // Адрес ссылки
  linkText: string; // Текст ссылки
  color: string;
}

const squaresData: SquareProps[] = [
  {
    linkTitle: "Календарь мероприятий",
    href: "#calendar", // Адрес ссылки
    linkText: "Подробнее", // Текст ссылки
    color: "rgb(35, 120, 252)",
  },
  {
    linkTitle: "Как добраться до Экспофорума",
    href: "#map",
    linkText: "Подробнее",
    color: "rgb(48, 188, 201)",
  },
  {
    linkTitle: "Онлайн-заявка на организацию мероприятия",
    href: "#application",
    linkText: "Подробнее",
    color: "rgb(255, 196, 30)",
  },
  {
    linkTitle: "План и инфраструктура комплекса",
    href: "#plan",
    linkText: "Подробнее",
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
            О комплексе{" "}
            <img
              src="/img/arrow.png"
              alt="Arrow"
              className={styles.arrowImage}
            />
          </a>
        </div>
        <div className={styles.rightBlock}>
          {squaresData.map((square, index) => (
            <div
              key={index}
              className={styles.square}
              style={{ backgroundColor: square.color }}
            >
              <a href={square.href} className={styles.squareLink}>
                {square.linkTitle}
                <div className={styles.arrow}>
                  {square.linkText}{" "}
                  <img
                    src="/img/arrow.png" // Путь к картинке
                    alt="Arrow"
                    className={styles.arrowImage}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
