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
];
