import { Link } from "react-router-dom";
import styles from "./EventBlock.module.scss";
import EventCard from "./EventCard/EventCard";
import EventHeader from "./EventHeader/EventHeader";
import eventsData from "../../data/eventsData";

const EventBlock = () => {
  return (
    <section className={styles.eventBlock}>
      <EventHeader />
      <div className={styles.cardWrapper}>
        {eventsData.map((event, index) => (
          <Link
            key={index}
            to={`/events/${encodeURIComponent(event.title)}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            <EventCard key={index} {...event} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default EventBlock;
