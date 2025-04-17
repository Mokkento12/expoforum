import styles from "./EventCard.module.scss";

interface EventCardProps {
  image: string;
  dates: string;
  title: string;
  venue: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  dates,
  title,
  venue,
}) => {
  return (
    <div className={styles.eventCard}>
      <img src={image} alt={title} className={styles.cardImage} />

      <p className={styles.cardDates}>{dates}</p>

      <h3 className={styles.cardTitle}>{title}</h3>

      <p className={styles.cardVenue}>{venue}</p>
    </div>
  );
};

export default EventCard;
