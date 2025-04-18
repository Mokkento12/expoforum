import styles from "./LeftBlock.module.scss";

const LeftBlock = () => {
  return (
    <div className={styles.leftBlock}>
      <img src="../../../../public/img/news/news-1.png" alt="News 1" />
      <img src="../../../../public/img/news/news-2.png" alt="News 2" />
    </div>
  );
};

export default LeftBlock;
