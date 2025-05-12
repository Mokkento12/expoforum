import { useEffect } from "react";
import styles from "./AboutComplex.module.scss";

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { fetchComplexInfo } from "../../store/slices/aboutComplexSlice";

const AboutComplex = () => {
  const dispatch = useDispatch<AppDispatch>();
  const info = useSelector((state: RootState) => state.about.info);
  const loading = useSelector((state: RootState) => state.about.loading);

  useEffect(() => {
    dispatch(fetchComplexInfo());
  }, [dispatch]);

  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.title}>О комплексе</h1>
      <p className={styles.description}>{loading ? "Загрузка..." : info}</p>
    </div>
  );
};

export default AboutComplex;
