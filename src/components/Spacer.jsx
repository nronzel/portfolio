import { CgArrowLongDown } from "solid-icons/cg";
import styles from "./Spacer.module.css";

const Spacer = () => {
  return (
    <div class="flex items-end justify-end border-r-8 border-emerald-500 h-3/5 w-9/12">
      <p class="mr-4">
        <CgArrowLongDown font-size="72px" className={styles.arrowBounce} />
      </p>
    </div>
  );
};

export default Spacer;
