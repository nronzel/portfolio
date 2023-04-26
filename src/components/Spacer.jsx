import { CgArrowLongDown } from "solid-icons/cg";
import { createSignal, createEffect, onCleanup } from "solid-js";

const Spacer = (props) => {
  const [isArrowVisible, setIsArrowVisible] = createSignal(true);

  createEffect(() => {
    const handleScroll = () => {
      setIsArrowVisible(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });

  if (!props.arrow) {
    setIsArrowVisible(false);
  }

  return (
    <div
      class="
      flex
      items-end
      justify-end
      border-emerald-500
      spacer
      w-full
      fadeIn
      "
      className={`${props.border} ${props.height}`}
    >
      <p
        class="arrow text-emerald-500 fadeTransition"
        classList={{
          "opacity-0": !isArrowVisible(),
          "opacity-100": isArrowVisible(),
        }}
      >
        <CgArrowLongDown font-size="80px" class="arrowBounce" />
      </p>
    </div>
  );
};

export default Spacer;
