import styles from "./SideMenu.module.scss";

interface SideMenuItem {
  title: string;
  items: { text: string; link: string }[];
}

const sideMenuData: SideMenuItem[] = [
  {
    title: "Организаторам",
    items: [
      { text: "Документы организаторам", link: "#documents" },
      { text: "Услуги организаторам", link: "#services" },
      { text: "Выставочные площади", link: "#exhibition-areas" },
      { text: "Рестораны и кафе", link: "#restaurants" },
      { text: "Конгресс-центр", link: "#congress-center" },
      { text: "Спорт-центр", link: "#sport-center" },
    ],
  },
  {
    title: "Экспонентам",
    items: [
      { text: "Общие условия участия", link: "#terms" },
      { text: "Услуги экспонентам", link: "#exhibitor-services" },
      { text: "Документы экспонентам", link: "#exhibitor-documents" },
      { text: "Центр деловых контактов", link: "#business-center" },
      { text: "Забронировать гостиницу", link: "#hotel-reservation" },
    ],
  },
  {
    title: "Посетителям",
    items: [
      { text: "Доступные сервисы", link: "#visitor-services" },
      {
        text: "Онлайн-регистрация на мероприятие",
        link: "#event-registration",
      },
      { text: "Бронирование гостиницы", link: "#hotel-booking" },
      { text: "Программа мероприятий", link: "#event-program" },
    ],
  },
  {
    title: "Прессе",
    items: [
      { text: "Процесс аккредитации", link: "#accreditation-process" },
      { text: "Контакты пресс-службы", link: "#press-contact" },
      { text: "Правила аккредитации", link: "#accreditation-rules" },
    ],
  },
];

const SideMenu = () => {
  return (
    <div className={styles.sideMenu}>
      <div className={styles.sideList}>
        {sideMenuData.map((column, columnIndex) => (
          <div key={columnIndex} className={styles.column}>
            <h3 className={styles.columnTitle}>{column.title}</h3>
            <ul className={styles.columnList}>
              {column.items.map((item, itemIndex) => (
                <li key={itemIndex} className={styles.columnItem}>
                  <a href={item.link} className={styles.columnLink}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
