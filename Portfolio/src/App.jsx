import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import ServicesOffered from "./components/ServicesOffered";
import Stacks from "./components/Stacks";
import ContactsPage from "./components/ContactsPage";
import MyWork from "./components/MyWork";

function App() {
  return (
    <div className="">
      <Header />
      <AboutMe />
      <Stacks />
      <ServicesOffered />
      <MyWork />
      <ContactsPage />
    </div>
  );
}

export default App;
