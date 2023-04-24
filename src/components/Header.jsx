const Header = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div class="flex h-16 justify-end items-center w-4/5 font-medium shrink-0">
      <ul class="flex gap-7 text-lg">
        <li>
          <span class="font-light">/\/ </span>
          <a href="#about" onClick={() => scrollToSection("about")}>
            about
          </a>
        </li>
        <li>
          <span class="font-light">/\/ </span>
          <a href="#projects">projects</a>
        </li>
        <li>
          <span class="font-light">/\/ </span>
          <a href="#">resume</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
