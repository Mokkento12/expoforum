import { useAppSelector, useAppDispatch } from "../../store";
import {
  addEmployee,
  removeEmployee,
  setCertified,
} from "../../store/slices/companySlice";
import styles from "./AboutCompany.module.scss";

const AboutCompany = () => {
  const dispatch = useAppDispatch();
  const company = useAppSelector((state) => state.company);

  return (
    <div className={styles.aboutPage}>
      <h1>О компании</h1>
      <p>Количество сотрудников: {company.employees}</p>

      <button onClick={() => dispatch(addEmployee())}>
        Добавить сотрудника
      </button>
      <button onClick={() => dispatch(removeEmployee())}>
        Удалить сотрудника
      </button>

      <hr />

      <h2>Сертификат ISO: {company.isCertified ? "✅" : "❌"}</h2>
      <button onClick={() => dispatch(setCertified(!company.isCertified))}>
        Переключить сертификацию
      </button>
    </div>
  );
};

export default AboutCompany;
