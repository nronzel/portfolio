import { FaSolidChevronUp } from "solid-icons/fa";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="
      fixed
      right-8
      bottom-4
      p-2
      rounded-full
      bg-emerald-200
      bg-opacity-10
      hover:bg-opacity-40
      "
      onClick={scrollToTop}
    >
      <FaSolidChevronUp size="24px" />
    </button>
  );
};

export default BackToTop;
