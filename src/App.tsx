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

import { footerColumns, socialIcons, newsletterData } from "./data/footerData";

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
