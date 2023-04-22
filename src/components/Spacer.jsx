import { CgArrowLongDown } from "solid-icons/cg";
import { createSignal, createEffect, onCleanup } from "solid-js";
import styles from "./styles.module.css";

const Spacer = () => {
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

  return (
    <div
      class="
      flex
      items-end
      justify-end
      border-r-8
      border-emerald-500
      w-9/12
      shrink-0
      "
      className={`${styles.spacer} ${styles.fadeIn}`}
    >
      <p
        className={`${styles.arrow} text-emerald-500 ${styles.fadeTransition}`}
        classList={{
          "opacity-0": !isArrowVisible(),
          "opacity-100": isArrowVisible(),
        }}
      >
        <CgArrowLongDown font-size="80px" className={styles.arrowBounce} />
      </p>
    </div>
  );
};

export default Spacer;
