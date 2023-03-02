import { totalBoards } from "../../constants/card";
import * as styles from "./progressBar.css";

type Props = {
  step: number
}

const progressBar = ({ step }: Props) => {

  const getPercent = () => String((step/totalBoards) * 100)

  return (
    <div className={styles.container}>
      <div style={{width: `${getPercent()}%`}} className={styles.filler}></div>
    </div>
  )
}

export default progressBar