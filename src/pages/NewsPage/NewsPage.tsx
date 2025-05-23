import React, { useEffect, useState } from "react";
import styles from "./NewsPage.module.scss";
import { useAppSelector, useAppDispatch } from "../../store";
import { addPost, fetchPosts } from "../../store/slices/newsSlice";

const NewsPage = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.news);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !body) return;

    dispatch(addPost({ title, body }));
    setTitle("");
    setBody("");
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className={styles.newsPage}>
      <h1>Новости</h1>

      <form onSubmit={handleAddPost} className={styles.postForm}>
        <input
          type="text"
          placeholder="Заголовок новости"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className={styles.input}
        />
        <textarea
          placeholder="Текст новости"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className={styles.textarea}
        />

        <button type="submit" className={styles.submitBtn}>
          Добавить новость
        </button>
      </form>

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
