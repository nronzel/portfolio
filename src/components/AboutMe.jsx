import { createSignal } from "solid-js";
import { useIntersectionObserver } from "solidjs-use";

const AboutMe = () => {
  const [target, setTarget] = createSignal(null);
  const [isVisible, setIsVisible] = createSignal(false);

  useIntersectionObserver(target, ([{ isIntersecting }]) => {
    setIsVisible(isIntersecting);
  });

  return (
    <div
      id="about"
      ref={setTarget}
      className={`
          pr-9
          pt-36
          pl-2
          border-r-8
          border-b-2
          border-emerald-500
          flex
          flex-col
          items-end
          w-full
          about-me
          ${isVisible() ? "fade-in-from-top" : "fade-out-to-top"}
          `}
    >
      <p
        className={`
          text-xs
          text-emerald-800
          pr-32"
          ${isVisible() ? "fadeInFromTopLeft" : ""}
          `}
      >
        a little more
      </p>
      <p
        className={`
          text-4xl
          font-semibold
          pr-9
          pb-5
          ${isVisible() ? "fadeInFromTopLeft" : ""}
          `}
      >
        About Me
      </p>
      <p className="text-emerald-100 max-w-2xl text-justify mb-9">
        Ever since I was a kid, I've been captivated by the world of technology.
        I can remember flipping through my mom's computer books, intrigued by
        the content and diagrams even before I knew what any of it meant. This
        curiosity eventually lead me to the world of programming and computer
        science, and I've been hooked ever since.{" "}
        <span className="block mt-3">
          {" "}
          After a fulfilling 10+ year career in IT, I've decided to pivot
          towards web development and software engineering. I'm excited about
          this transition, as it allows me to blend my expertise with my passion
          for creating innovative and engaging digital solutions. I look forward
          to making a real impact in the world of technology and enhancing the
          lives of users around the globe.
        </span>
      </p>
    </div>
  );
};
export default AboutMe;
