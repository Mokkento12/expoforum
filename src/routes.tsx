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

  // Organizers
  { path: "/organizers/documents", element: <DocumentsPage /> },
  { path: "/organizers/services", element: <ServicesPage /> },
  { path: "/organizers/exhibition-areas", element: <ExhibitionAreasPage /> },
  { path: "/organizers/restaurants", element: <RestaurantsPage /> },
  { path: "/organizers/congress-center", element: <CongressCenterPage /> },
  { path: "/organizers/sport-center", element: <SportCenterPage /> },
];
