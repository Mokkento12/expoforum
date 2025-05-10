import NewsItem from "../NewsItem/NewsItem";
import { Link } from "react-router-dom";
import styles from "./RightBlock.module.scss";

interface RightBlockProps {
  news: { image: string; date: string; title: string }[];
}

const RightBlock: React.FC<RightBlockProps> = ({ news }) => {
  return (
    <div className={styles.rightBlock}>
      <div className={styles.rightHeader}>
        <h2 className={styles.rightTitle}>Новости</h2>
        <Link to="/all-news" className={styles.rightLink}>
          Все новости
          <img
            src="../../../../public/img/events/arrow-black.png"
            alt="Arrow"
            className={styles.arrowImage}
          />
        </Link>
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
