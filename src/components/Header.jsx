const Header = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="flex h-16 justify-end items-center w-4/5 font-medium shrink-0">
      <ul className="flex gap-7 text-lg">
        <li className="header-links hover:text-emerald-200">
          <span className="font-light">/\/ </span>
          <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
            about
          </a>
        </li>
        <li className="header-links hover:text-emerald-200">
          <span className="font-light">/\/ </span>
          <a href="https://blog.nickronzel.com" target="_blank">
            blog
          </a>
        </li>
        <li className="header-links hover:text-emerald-200">
          <span className="font-light">/\/ </span>
          <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
            projects
          </a>
        </li>
        <li className="header-links hover:text-emerald-200">
          <span className="font-light">/\/ </span>
          <a
            href="/nicholas-ronzel-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </li>
        <li className="header-links hover:text-emerald-200">
          <span className="font-light">/\/ </span>
          <a
            href="https://github.com/nronzel"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
