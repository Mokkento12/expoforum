import "./App.css";
import EventBlock from "./components/EventBlock/EventBlock";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import News from "./components/News/News";
import SideMenuItem from "./components/SideMenu/SideMenu";

function App() {
  return (
    <>
      <HeroContainer />
      <SideMenuItem />
      <EventBlock />
      <News />
    </>
  );
}

export default App;
