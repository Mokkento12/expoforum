import LeftBlock from "./LeftBlock/LeftBlock";
import styles from "./News.module.scss";
import RightBlock from "./RightBlock/RightBlock";

const newsData = [
  {
    image: "../../../public/img/news/news1.png",
    date: "4 января 2020 г.",
    title: "Как объединилась реальность и виртуальность – LIKEE PARTY",
  },
  {
    image: "../../../public/img/news/news2.png",
    date: "2 января 2020 г.",
    title: "Как объединилась реальность и виртуальность – LIKEE PARTY",
  },
  {
    image: "../../../public/img/news/news3.png",
    date: "2 января 2020 г.",
    title: "Как объединилась реальность и виртуальность – LIKEE PARTY",
  },
];

const News = () => {
  return (
    <section className={styles.news}>
      <div className={styles.newsWrapper}>
        <LeftBlock />
        <RightBlock news={newsData} />
      </div>
    </section>
  );
};

export default News;
