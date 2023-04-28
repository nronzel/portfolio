import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Spacer from "./components/Spacer.jsx";
import AboutMe from "./components/AboutMe.jsx";
import "./components/styles/styles.css";
import "./components/styles/animations.css";
import Page from "./components/Page.jsx";
import Projects from "./components/Projects.jsx";
import { useMouse } from "solidjs-use";
import ResumeButton from "./components/ResumeButton.jsx";
import EmailTag from "./components/EmailTag.jsx";

function App() {
  const { x, y } = useMouse();

  const glowStyle = () => ({
    top: `${y()}px`,
    left: `${x()}px`,
  });

  return (
    <>
      <EmailTag />
      <div class="glow-effect" style={glowStyle()} />
      <Page
        children={[
          <Header />,
          <Hero />,
          <Spacer border={"border-r-8"} arrow={true} height={"auto"} />,
        ]}
      />
      <Page
        children={[
          <AboutMe />,
          <Spacer border={"border-l-8"} arrow={false} height={"auto"} />,
        ]}
      />
      <Page children={[<Projects />]} />
      <ResumeButton />
    </>
  );
}
export default App;
