import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Spacer from "./components/Spacer.jsx";
import AboutMe from "./components/AboutMe.jsx";

function App() {
  return (
    <>
      <div class="w-full flex flex-col items-center h-full main-container">
        <Header />
        <Hero />
        <Spacer />
      </div>
      <AboutMe />
    </>
  );
}
export default App;
