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
    <div class="flex flex-col items-center mb-9">
      <p class="text-emerald-600">If you made it this far, check out my</p>
      <a class="mt-4" href="/nicholas-ronzel-resume.pdf" target="_blank">
        <button
          ref={button}
          type="button"
          class="btn text-emerald-100 fill-center-btn
      "
          onMouseEnter={handleMouseEnter}
        >
          Resume
        </button>
      </a>
    </div>
  );
};

export default ResumeButton;
