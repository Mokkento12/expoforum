import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer/Footer";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import EventBlock from "./components/EventBlock/EventBlock";
import News from "./components/News/News";
import SideMenuItem from "./components/SideMenu/SideMenu";

import { footerColumns, socialIcons, newsletterData } from "./data/footerData";

// Заглушки для страниц
const AboutComplex = () => <div style={{ padding: 40 }}>О комплексе</div>;
const AboutCompany = () => <div style={{ padding: 40 }}>О компании</div>;
const MediaBank = () => <div style={{ padding: 40 }}>Медиа-банк</div>;
const Contacts = () => <div style={{ padding: 40 }}>Контакты</div>;

function App() {
  return (
    <div className="layout">
      <BrowserRouter>
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroContainer />
                  <SideMenuItem />
                  <EventBlock />
                  <News />
                </>
              }
            />
            <Route path="/about-complex" element={<AboutComplex />} />
            <Route path="/about-company" element={<AboutCompany />} />
            <Route path="/media-bank" element={<MediaBank />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer
          columns={footerColumns}
          socialIcons={socialIcons}
          newsletterData={newsletterData}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
