import { useEffect } from "react";
import styles from "./NewsPage.module.scss";
import { useAppSelector, useAppDispatch } from "../../store";
import { fetchPosts } from "../../store/slices/newsSlice";

const NewsPage = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className={styles.newsPage}>
      <h1>Новости</h1>

      {loading === "loading" && <p>Загрузка новостей...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {loading === "succeeded" && (
        <div className={styles.post}>
          {posts.slice(0, 5).map((post) => (
            <article key={post.id} className={styles.postCard}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsPage;
