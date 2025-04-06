// src/components/Search/Search.tsx
import React, { useState } from "react";
import styles from "./Search.module.scss";

const Search = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState(""); // Добавляем состояние для текста поиска

  const toggleSearch = () => {
    if (!isSearchVisible) {
      setSearchValue(""); // Очищаем значение при показе инпута
    }
    setSearchVisible((prev) => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // Обновляем значение при вводе
  };

  const resetSearch = () => {
    setSearchValue(""); // Сбрасываем значение
    setSearchVisible(false); // Скрываем инпут
  };

  return (
    <div className={styles.search}>
      {/* Кнопка поиска */}
      <button
        className={styles.searchButton}
        onClick={toggleSearch}
        aria-label="Переключить поиск"
      >
        <img
          src="../../../public/img/search.png"
          alt="search"
          className={styles.searchIcon}
        />
      </button>

      {/* Инпут поиска */}
      {isSearchVisible && (
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Поиск..."
            className={`${styles.searchInput} ${
              isSearchVisible ? styles.active : ""
            }`}
            value={searchValue}
            onChange={handleInputChange}
            disabled={!isSearchVisible} // Активируем инпут только при visible
          />

          {/* Крестик для сброса */}
          {searchValue && (
            <button
              className={styles.resetButton}
              onClick={resetSearch}
              aria-label="Сбросить поиск"
            >
              <img
                src="../../../public/img/close.png" // Иконка крестика
                alt="close"
                className={styles.closeIcon}
              />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
