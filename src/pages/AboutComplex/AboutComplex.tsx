import { useEffect } from "react";
import styles from "./AboutComplex.module.scss";

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { fetchComplexInfo } from "../../store/slices/aboutComplexSlice";
import { selectInfoLength } from "../../store/slices/aboutComplexSlice";
import { toggleTheme } from "../../store/slices/themeSlice";

import {
  incrementViews,
  selectPopularSections,
  selectTotalViews,
} from "../../store/slices/AboutViewsSlices";

const AboutComplex = () => {
  const dispatch = useDispatch<AppDispatch>();
  const info = useSelector((state: RootState) => state.about.info);
  const loading = useSelector((state: RootState) => state.about.loading);
  const infoLength = useSelector(selectInfoLength);
  const theme = useSelector((state: RootState) => state.theme.mode);

  const totalViews = useSelector(selectTotalViews);
  const popularSections = useSelector(selectPopularSections);

  useEffect(() => {
    dispatch(incrementViews("intro"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchComplexInfo());
  }, [dispatch]);

  return (
    <div
      className={`${styles.aboutPage} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <h1 className={styles.title}>О комплексе</h1>
      <p className={styles.description}>{loading ? "Загрузка..." : info}</p>
      <p className={styles.infoLength}>Длина текста: {infoLength} символов</p>
      <button onClick={() => dispatch(toggleTheme())}>
        {" "}
        Сменить тему на {theme === "light" ? "тёмную" : "светлую"}
      </button>

      <div>
        <p>👀 Всего просмотров: {totalViews}</p>
        <p>🔥 Популярные секции:</p>
        <ul>
          {popularSections.map((s) => (
            <li key={s.section}>
              {s.section} — {s.views}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutComplex;
