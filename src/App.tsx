import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import SideMenuItem from "./components/SideMenu/SideMenu";
import EventBlock from "./components/EventBlock/EventBlock";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";

import { footerColumns, socialIcons, newsletterData } from "./data/footerData";
import { routes } from "./routes";
import EventDetailsPage from "./pages/EventDetailsPage/EventDetailsPage";

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
            <Route path="/events/:title" element={<EventDetailsPage />} />
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
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
