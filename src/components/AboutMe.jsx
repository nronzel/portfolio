import { createEffect, createSignal, onCleanup } from "solid-js";
import "./styles/animations.css";

const AboutMe = () => {
  let aboutMeRef;
  const [isVisible, setIsVisible] = createSignal(false);

  // visibility for the AboutMe section on scroll
  createEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (aboutMeRef) {
      observer.observe(aboutMeRef);
    }

    onCleanup(() => {
      if (aboutMeRef) {
        observer.unobserve(aboutMeRef);
      }
    });
  });

  return (
    <div
      id="about"
      ref={aboutMeRef}
      class="
      w-9/12
      pr-9
      pt-60
      border-r-8
      border-emerald-500
      flex
      flex-col
      items-end
      "
      className={`about-me ${
        isVisible() ? "fade-in-from-top" : "fade-out-to-top"
      }`}
    >
      <p class="text-xs text-emerald-800 pr-32" className={`${isVisible() ? "fadeInFromLeft" : ""}`}>a little more</p>
      <p class="text-4xl font-semibold pr-9 pb-5" className={`${isVisible() ? "fadeInFromLeft" : ""}`}>About Me</p>
      <p class="text-emerald-100 max-w-3xl text-justify mb-9">
        Ever since I was a kid, I've been captivated by the world of technology.
        I can remember flipping through my mom's computer books, intrigued by
        the content and diagrams even before I knew what any of it meant. This
        curiosity eventually lead me to the world of programming and computer
        science, and I've been hooked ever since. After a fulfilling 10+ year
        career in IT, I've decided to pivot towards web development and software
        engineering. I'm excited about this transition, as it allows me to blend
        my expertise with my passion for creating innovative and engaging
        digital solutions. I look forward to making a real impact in the world
        of technology and enhancing the lives of users around the globe.
      </p>
    </div>
  );
};
export default AboutMe;
