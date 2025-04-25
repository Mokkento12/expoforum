import "./App.css";
import EventBlock from "./components/EventBlock/EventBlock";
import Footer from "./components/Footer/Footer";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import News from "./components/News/News";
import SideMenuItem from "./components/SideMenu/SideMenu";
import { footerColumns, socialIcons, newsletterData } from "./data/footerData";

function App() {
  return (
    <>
      <HeroContainer />
      <SideMenuItem />
      <EventBlock />
      <News />
      <Footer
        columns={footerColumns}
        socialIcons={socialIcons}
        newsletterData={newsletterData} // Передаём данные для подписки
      />
    </>
  );
}

export default App;
