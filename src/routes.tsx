import AboutComplex from "./pages/AboutComplex/AboutComplex";
import AboutCompany from "./pages/AboutCompany/AboutCompany";
import NewsPage from "./pages/NewsPage/NewsPage";
import MediaBank from "./pages/MediaBank/MediaBank";
import Contacts from "./pages/Contacts/Contacts";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import MapPage from "./pages/MapPage/MapPage";
import ApplicationPage from "./pages/ApplicationPage/ApplicationPage";
import PlanPage from "./pages/PlanPage/PlanPage";

import DocumentsPage from "./pages/organizers/DocumentPage/DocumentsPage";
import ServicesPage from "./pages/organizers/ServicesPage/ServicesPage";
import ExhibitionAreasPage from "./pages/organizers/ExhibitionAreasPage/ExhibitionAreasPage";
import RestaurantsPage from "./pages/organizers/RestaurantsPage/RestaurantsPage";
import CongressCenterPage from "./pages/organizers/CongressCenterPage/CongressCenterPage";
import SportCenterPage from "./pages/organizers/SportCenterPage/SportCenterPage";
import AllNewsPage from "./pages/AllNewsPage/AllNewsPage";

// Заглушки
const Stub = ({ title }: { title: string }) => (
  <div style={{ padding: 20 }}>{title}</div>
);

export const routes = [
  { path: "/about-complex", element: <AboutComplex /> },
  { path: "/about-company", element: <AboutCompany /> },
  { path: "/news", element: <NewsPage /> },
  { path: "/media-bank", element: <MediaBank /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/calendar", element: <CalendarPage /> },
  { path: "/map", element: <MapPage /> },
  { path: "/application", element: <ApplicationPage /> },
  { path: "/plan", element: <PlanPage /> },
  { path: "/all-news", element: <AllNewsPage /> },

  // Organizers
  { path: "/organizers/documents", element: <DocumentsPage /> },
  { path: "/organizers/services", element: <ServicesPage /> },
  { path: "/organizers/exhibition-areas", element: <ExhibitionAreasPage /> },
  { path: "/organizers/restaurants", element: <RestaurantsPage /> },
  { path: "/organizers/congress-center", element: <CongressCenterPage /> },
  { path: "/organizers/sport-center", element: <SportCenterPage /> },

  // Добавленные маршруты из футера
  { path: "/about", element: <Stub title="О нашей компании" /> },
  { path: "/vacancies", element: <Stub title="Вакансии" /> },
  { path: "/partners", element: <Stub title="Партнеры" /> },
  { path: "/benefits", element: <Stub title="Преимущества площадки" /> },
  { path: "/structure", element: <Stub title="Структура комплекса" /> },
  {
    path: "/online-registration",
    element: <Stub title="Онлайн-заявка на организацию" />,
  },
  {
    path: "/organizers-docs",
    element: <Stub title="Документы организаторам" />,
  },
  { path: "/conditions", element: <Stub title="Общие условия участия" /> },
  { path: "/exhibitor-services", element: <Stub title="Услуги экспонентам" /> },
  { path: "/exhibitor-docs", element: <Stub title="Документы экспонентам" /> },
  { path: "/booking", element: <Stub title="Забронировать гостиницу" /> },
  { path: "/visitor-services", element: <Stub title="Сервисы посетителям" /> },
  {
    path: "/visitor-registration",
    element: <Stub title="Онлайн-регистрация для посетителей" />,
  },
  { path: "/contact-center", element: <Stub title="Контактный центр" /> },
  { path: "/accreditation", element: <Stub title="Аккредитация" /> },
  { path: "/press-service", element: <Stub title="Пресс-служба" /> },
  {
    path: "/accreditation-rules",
    element: <Stub title="Правила аккредитации" />,
  },
];
