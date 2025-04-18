import styles from "./NewsItem.module.scss";

interface NewsItemProps {
  image: string;
  date: string;
  title: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ image, date, title }) => {
  return (
    <div className={styles.newsItem}>
      <img src={image} alt={title} className={styles.itemImage} />

      <div className={styles.itemContent}>
        <p className={styles.itemDate}>{date}</p>
        <p className={styles.itemTitle}>{title}</p>
      </div>
    </div>
  );
};

export default NewsItem;
