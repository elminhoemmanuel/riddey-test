import { useState } from "react";
import CardBody from "../CardBody";
import CardHeader from "../CardHeader";
import CardProgress from "../CardProgress";
import Logo from "../Logo";
import * as styles from "./card.css";

const Card = () => {

  const [step, setStep] = useState(2)

  return (
    <article className={styles.card}>
      <Logo />
      <CardHeader />
      <CardBody />
      <CardProgress step={step} />
    </article>
  )
}

export default Card