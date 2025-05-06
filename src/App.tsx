import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Компоненты
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import SideMenuItem from "./components/SideMenu/SideMenu";
import EventBlock from "./components/EventBlock/EventBlock";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";

// Страницы
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

import { footerColumns, socialIcons, newsletterData } from "./data/footerData";
import ServicesPage from "./pages/organizers/ServicesPage/ServicesPage";
import ExhibitionAreasPage from "./pages/organizers/ExhibitionAreasPage/ExhibitionAreasPage";
import RestaurantsPage from "./pages/organizers/RestaurantsPage/RestaurantsPage";
import CongressCenterPage from "./pages/organizers/CongressCenterPage/CongressCenterPage";
import SportCenterPage from "./pages/organizers/SportCenterPage/SportCenterPage";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="mainWithBackground">
                    <Header />
                    <Hero />
                  </div>
                  <SideMenuItem />
                  <EventBlock />
                  <News />
                </>
              }
            />
            <Route path="/about-complex" element={<AboutComplex />} />
            <Route path="/about-company" element={<AboutCompany />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/media-bank" element={<MediaBank />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/application" element={<ApplicationPage />} />
            <Route path="/plan" element={<PlanPage />} />
            <Route path="/organizers/documents" element={<DocumentsPage />} />
            <Route path="/organizers/services" element={<ServicesPage />} />
            <Route
              path="/organizers/exhibition-areas"
              element={<ExhibitionAreasPage />}
            />
            <Route
              path="/organizers/restaurants"
              element={<RestaurantsPage />}
            />
            <Route
              path="/organizers/congress-center"
              element={<CongressCenterPage />}
            />
            <Route
              path="/organizers/sport-center"
              element={<SportCenterPage />}
            />
          </Routes>
        </main>
        <Footer
          columns={footerColumns}
          socialIcons={socialIcons}
          newsletterData={newsletterData}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
