import React, { useEffect, useState } from "react";
import styles from "./NewsPage.module.scss";
import { useAppSelector, useAppDispatch } from "../../store";
import {
  addLocalPost,
  fetchPosts,
  removeLocalPost,
} from "../../store/slices/newsSlice";

const NewsPage = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.news);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !body) return;

    const newPost = {
      id: Date.now(),
      title,
      body,
    };

    dispatch(addLocalPost(newPost));
    setTitle("");
    setBody("");
  };

  const handleDeletePost = (id: number) => {
    dispatch(removeLocalPost(id));
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className={styles.newsPage}>
      <h1>Новости</h1>

      {/* Форма добавления */}
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

      {/* Спиннер и ошибки */}
      {loading === "loading" && <p>Загрузка новостей...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Список постов */}
      <div className={styles.posts}>
        {posts.slice(0, 5).map((post) => (
          <article key={post.id} className={styles.postCard}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <button
              onClick={() => handleDeletePost(post.id)}
              className={styles.deleteBtn}
            >
              Удалить
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
