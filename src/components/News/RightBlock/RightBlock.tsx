import NewsItem from "../NewsItem/NewsItem";
import styles from "./RightBlock.module.scss";

interface RightBlockProps {
  news: { image: string; date: string; title: string }[];
}

const RightBlock: React.FC<RightBlockProps> = ({ news }) => {
  return (
    <div className={styles.rightBlock}>
      <div className={styles.rightHeader}>
        <h2 className={styles.rightTitle}>Новости</h2>
        <a href="#news" className={styles.rightLink}>
          Все новости
          <img
            src="../../../../public/img/events/arrow-black.png"
            alt="Arrow"
            className={styles.arrowImage}
          />
        </a>
      </div>
      <div className={styles.newsItems}>
        {news.map((item, index) => (
          <NewsItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RightBlock;
