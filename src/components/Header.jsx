export default function Header() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div class="flex justify-end items-center w-4/5 font-medium mt-3">
      <ul class="flex gap-7 text-lg">
        <li>
          <span class="font-light">/\/ </span>
          <a href="#about" onClick={() => scrollToSection("about")}>
            about
          </a>
        </li>
        <li>
          <span class="font-light">/\/ </span>
          <a href="#">projects</a>
        </li>
        <li>
          <span class="font-light">/\/ </span>
          <a href="#" class="underline underline-offset-4">
            resume
          </a>
        </li>
      </ul>
    </div>
  );
}
