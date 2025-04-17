import styles from "./EventBlock.module.scss";
import EventCard from "./EventCard/EventCard";
import EventHeader from "./EventHeader/EventHeader";

interface EventBlock {
  image: string;
  dates: string;
  title: string;
  venue: string;
}

const eventsData: EventProps[] = [
  {
    image: "../../../public/img/events/ny-2020.png",
    dates: "2 января 2020 г. – 7 января 2020 г.",
    title: "ЭКСПО ЕЛКА",
    venue: "Парк интерактивных развлечений",
  },
  {
    image: "../../../public/img/events/junwex.png",
    dates: "5 февраля 2020 г. – 9 февраля 2020 г.",
    title: "Junwex Петербург",
    venue: "Выставка ювелирных изделий",
  },
  {
    image: "../../../public/img/events/nevsky.png",
    dates: "7 февраля 2020 г. – 9 февраля 2020 г.",
    title: "Невский ларец",
    venue: "Выставка-ярмарка народных художественных промыслов и ремесел",
  },
  {
    image: "../../../public/img/events/ride.png",
    dates: "14 февраля 2020 г. – 23 февраля 2020 г.",
    title: "ПОНАЕХАЛИ!",
    venue: "Специализированная арт-ярмарка",
  },
  {
    image: "../../../public/img/events/vetcamp.png",
    dates: "18 февраля 2020 г. – 21 февраля 2020 г.",
    title: "VET.CAMP",
    venue: "Конференция для ветеринарных врачей",
  },
  {
    image: "../../../public/img/events/horeca.png",
    dates: "26 февраля 2020 г. – 28 февраля 2020 г.",
    title: "ExpoHoReCa",
    venue: "Специализированная выставка",
  },
];

const EventBlock = () => {
  return (
    <section className={styles.eventBlock}>
      <EventHeader />
      <div className={styles.cardWrapper}>
        {eventsData.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </section>
  );
};

export default EventBlock;
