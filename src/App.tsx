import { FunctionComponent, ReactElement } from "react";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import SkillsPage from "./components/SkillsPage/SkillsPage";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactsPage from "./components/ContactsPage/ContactsPage";

const App: FunctionComponent = (): ReactElement => {
  return(
    <div>
      <Header/>
      <MainPage/>
      <AboutPage/>
      <SkillsPage/>
      <ContactsPage/>
    </div>
  )
}

export default App