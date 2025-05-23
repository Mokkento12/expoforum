import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store";
import {
  addEmployee,
  fetchCompanyData,
  removeEmployee,
  setCertified,
} from "../../store/slices/companySlice";
import { selectCompanyStatus } from "../../store/selectors/companySelectors";
import styles from "./AboutCompany.module.scss";

const AboutCompany = () => {
  const dispatch = useAppDispatch();
  const { employees, isCertified, loading, error } = useAppSelector(
    (state) => state.company
  );

  useEffect(() => {
    dispatch(fetchCompanyData());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("company", JSON.stringify({ employees, isCertified }));
  }, [employees, isCertified]);

  const companyStatus = useAppSelector(selectCompanyStatus);

  return (
    <div className={styles.aboutPage}>
      <h2>Статус компании: {companyStatus}</h2>

      {loading === "loading" && <p>Загрузка данных...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {loading === "succeeded" && (
        <>
          <p>Количество сотрудников: {employees}</p>

          <button onClick={() => dispatch(addEmployee())}>
            Добавить сотрудника
          </button>
          <button onClick={() => dispatch(removeEmployee())}>
            Удалить сотрудника
          </button>

          <hr />

          <h2>Сертификат ISO: {isCertified ? "✅" : "❌"}</h2>
          <button onClick={() => dispatch(setCertified(!isCertified))}>
            Переключить сертификацию
          </button>
        </>
      )}
    </div>
  );
};

export default AboutCompany;
