import EmailTag from "./EmailTag";

const ResumeButton = () => {
  let button;

  const handleMouseEnter = (e) => {
    const buttonRect = button.getBoundingClientRect();
    const buttonX = e.clientX - buttonRect.left;
    const buttonY = e.clientY - buttonRect.top;
    button.style.setProperty("--fill-x", `${buttonX}px`);
    button.style.setProperty("--fill-y", `${buttonY}px`);
  };

  return (
    <div className="flex flex-col items-center mb-9 simpleFade">
      <p className="text-emerald-100">
        If you've made it this far, check out my
      </p>
      <a
        className="mt-4 mb-4"
        href="/nicholas-ronzel-resume.pdf"
        target="_blank"
      >
        <button
          ref={button}
          type="button"
          className="btn text-emerald-100 fill-center-btn
      "
          onMouseEnter={handleMouseEnter}
        >
          Resume
        </button>
      </a>
      <EmailTag />
    </div>
  );
};

export default ResumeButton;
