import React, { useState, useEffect, useCallback } from "react";
import styles from "./Search.module.scss";
import { highlightSearchText, resetHighlights } from "../utils/highlightText";

// Функция для debounce (задержки перед выполнением действия)
function debounce<Func extends (...args: any[]) => void>(
  func: Func,
  delay: number
) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<Func>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

interface SearchProps {
  onSearch?: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // Хэндлер с debounce для подсветки
  const debouncedHighlight = useCallback(
    debounce((value: string) => {
      resetHighlights(document.body);
      if (value.trim()) {
        highlightSearchText(document.body, value);
      }
    }, 300),
    []
  );

  useEffect(() => {
    debouncedHighlight(searchValue);
  }, [searchValue, debouncedHighlight]);

  const toggleSearch = () => {
    if (!isSearchVisible) {
      setSearchValue("");
      resetHighlights(document.body);
    }
    setSearchVisible((prev) => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const resetSearch = () => {
    setSearchValue("");
    resetHighlights(document.body);
    if (onSearch) {
      onSearch("");
    }
    setSearchVisible(false);
  };

  return (
    <div className={styles.search}>
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

      {isSearchVisible && (
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Поиск..."
            className={`${styles.searchInput} ${styles.active}`}
            value={searchValue}
            onChange={handleInputChange}
            autoFocus
          />

          {searchValue && (
            <button
              className={styles.resetButton}
              onClick={resetSearch}
              aria-label="Сбросить поиск"
            >
              <img
                src="../../../public/img/close.png"
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
