import "./App.css";
import EventBlock from "./components/EventBlock/EventBlock";
import Footer from "./components/Footer/Footer";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import News from "./components/News/News";
import SideMenuItem from "./components/SideMenu/SideMenu";
import {
  footerColumns,
  socialIcons,
  subscribeButtonLabel,
} from "./data/footerData";

function App() {
  return (
    <>
      <HeroContainer />
      <SideMenuItem />
      <EventBlock />
      <News />
      <Footer
        columns={footerColumns} // Колонки
        socialIcons={socialIcons} // Соцсети
        subscribeButtonLabel={subscribeButtonLabel} // Текст кнопки подписки
      />
    </>
  );
}

export default App;
