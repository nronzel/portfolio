const Header = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav class="flex h-16 justify-end items-center w-4/5 font-medium shrink-0">
      <ul class="flex gap-7 text-lg">
        <li class="hover:text-emerald-200">
          <span class="font-light">/\/ </span>
          <a href="#about" onClick={() => scrollToSection("about")}>
            about
          </a>
        </li>
        <li class="hover:text-emerald-200">
          <span class="font-light">/\/ </span>
          <a href="#projects">projects</a>
        </li>
        <li class="hover:text-emerald-200">
          <span class="font-light">/\/ </span>
          <a href="/nicholas-ronzel-resume.pdf" target="_blank">
            resume
          </a>
        </li>
        <li class="hover:text-emerald-200">
          <span class="font-light">/\/ </span>
          <a href="https://github.com/nronzel" target="_blank">
            github
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
