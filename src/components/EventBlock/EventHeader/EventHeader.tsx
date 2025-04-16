import styles from "./EventHeader.module.scss";

const EventHeader = () => {
  return (
    <header className={styles.eventHeader}>
      <h2 className={styles.headerTitle}>Текущие и будущие мероприятия</h2>
      <a href="#events" className={styles.headerEventLink}>
        Все мероприятия
        <img
          src="../../../../public/img/events/arrow-black.png"
          alt="Arrow"
          className={styles.arrowImage}
        />
      </a>
    </header>
  );
};

export default EventHeader;
