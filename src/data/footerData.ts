export const footerColumns = [
  {
    title: "О компании",
    links: [
      { text: "О нашей компании", href: "#about" },
      { text: "Вакансии", href: "#vacancies" },
      { text: "Партнеры", href: "#partners" },
      { text: "Контакты", href: "#contacts" },
    ],
  },
  {
    title: "Организаторам",
    links: [
      { text: "Преимущества площадки", href: "#benefits" },
      { text: "Структура комплекса", href: "#structure" },
      { text: "Онлайн-заявка на организацию", href: "#online-registration" },
      { text: "Документы организаторам", href: "#docs" },
    ],
  },
  {
    title: "Экспонентам",
    links: [
      { text: "Общие условия участия", href: "#conditions" },
      { text: "Услуги экспонентам", href: "#services" },
      { text: "Документы экспонентам", href: "#docs" },
      { text: "Забронировать гостиницу", href: "#booking" },
    ],
  },
  {
    title: "Посетителям",
    links: [
      { text: "Сервисы", href: "#services" },
      { text: "Онлайн-регистрация", href: "#online-registration" },
      { text: "Забронировать гостиницу", href: "#booking" },
      { text: "Забронировать гостиницу", href: "#contact-center" },
    ],
  },
  {
    title: "Прессе",
    links: [
      { text: "Аккредитация", href: "#accreditation" },
      { text: "Пресс-служба", href: "#press-service" },
      { text: "Правила аккредитации", href: "#accreditation rules" },
    ],
  },
];

export interface SocialIcon {
  name: string;
}

export const socialIcons: SocialIcon[] = [
  { name: "youtube" },
  { name: "vk" },
  { name: "facebook" },
  { name: "instagram" },
];

export const subscribeButtonLabel = "Подписаться";
