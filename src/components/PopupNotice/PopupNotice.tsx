// src/components/PopupNotice/PopupNotice.tsx
import React from "react";
import styles from "./PopupNotice.module.scss";

interface NoticeProps {
  isOpen: boolean; // Открыто ли уведомление
  message: string; // Сообщение
  onClose: () => void; // Обработчик закрытия
}

const PopupNotice: React.FC<NoticeProps> = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null; // Если не открыто, ничего не рендерим

  return (
    <div className={styles.popupNotice} onClick={onClose}>
      <div className={styles.content}>
        <p>{message}</p>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default PopupNotice;
