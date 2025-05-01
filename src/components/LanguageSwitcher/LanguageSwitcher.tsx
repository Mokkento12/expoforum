import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../../store/slices/languageSlice";
import styles from "./LanguageSwitcher.module.scss";
import globeIcon from "/img/globe.png";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: any) => state.language.current);

  const handleClick = () => {
    dispatch(toggleLanguage());
  };

  return (
    <div className={styles.language} onClick={handleClick}>
      <img src={globeIcon} alt="Globe" />
      <button className={styles.languageButton} disabled>
        {language === "en" ? "English" : "Русский"}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
