import { useParams } from "react-router-dom";
import eventsData from "../../data/eventsData";
import styles from "./EventDetailsPage.module.scss";

const EventDetailsPage = () => {
  const { title } = useParams<{ title: string }>();
  const decodedTitle = decodeURIComponent(title || "");

  const event = eventsData.find((e) => e.title === decodedTitle);

  if (!event) {
    return <div style={{ padding: "2rem" }}>Событие не найдено</div>;
  }

  return (
    <div className={styles.eventPage}>
      <h1>{event.title}</h1>
      <img src={event.image} alt={event.title} />
      <p>
        <strong>Даты:</strong> {event.dates}
      </p>
      <p>
        <strong>Место:</strong> {event.venue}
      </p>
    </div>
  );
};

export default EventDetailsPage;
