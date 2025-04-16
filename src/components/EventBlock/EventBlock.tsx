import styles from "./EventBlock.module.scss";
import EventHeader from "./EventHeader/EventHeader";

interface EventBlock {
  image: string;
  dates: string;
  title: string;
  venue: string;
}

const EventBlock = () => {
  return (
    <section className={styles.eventBlock}>
      <EventHeader />
      <div className={styles.cardWrapper}>
        <p>EVENTCARD</p>
      </div>
    </section>
  );
};

export default EventBlock;
