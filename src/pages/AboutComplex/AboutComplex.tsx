import { useEffect } from "react";
import styles from "./AboutComplex.module.scss";

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { fetchComplexInfo } from "../../store/slices/aboutComplexSlice";
import { selectInfoLength } from "../../store/slices/aboutComplexSlice";
import { toggleTheme } from "../../store/slices/themeSlice";

const AboutComplex = () => {
  const dispatch = useDispatch<AppDispatch>();
  const info = useSelector((state: RootState) => state.about.info);
  const loading = useSelector((state: RootState) => state.about.loading);
  const infoLength = useSelector(selectInfoLength);
  const theme = useSelector((state: RootState) => state.theme.mode);

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
    </div>
  );
};

export default AboutComplex;
