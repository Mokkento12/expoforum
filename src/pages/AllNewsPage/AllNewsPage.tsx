import NewsItem from "../../components/News/NewsItem/NewsItem";
import styles from "./AllNewsPage.module.scss";

const allNews = [
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
  // можно добавить больше новостей
];

const AllNewsPage = () => {
  return (
    <section className={styles.AllNewsPage}>
      <h1>Все новости</h1>
      <div className={styles.newsList}>
        {allNews.map((item, index) => (
          <NewsItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default AllNewsPage;
