import { totalBoards } from "../../constants/card";
import ProgressBar from "../ProgressBar";
import * as styles from "./cardProgress.css";

type Props = {
  step: number;
}

const CardProgress = ({ step }: Props) => {

  return (
    <section className={styles.holder}>
      <h4 className={styles.title}>Current usage</h4>
      <p className={styles.subtitle}>{step} out of {totalBoards} boards in use</p>
      <ProgressBar step={step} />
    </section>
  )
}

export default CardProgress