import "./App.css";
import EventBlock from "./components/EventBlock/EventBlock";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import SideMenuItem from "./components/SideMenu/SideMenu";

function App() {
  return (
    <>
      <HeroContainer />
      <SideMenuItem />
      <EventBlock />
    </>
  );
}

export default App;
