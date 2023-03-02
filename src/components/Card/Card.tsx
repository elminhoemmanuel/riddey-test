import { useState } from "react";
import { incrementValue, totalBoards } from "../../constants/card";
import Button from "../Button";
import CardBody from "../CardBody";
import CardFooter from "../CardFooter";
import CardHeader from "../CardHeader";
import CardProgress from "../CardProgress";
import Logo from "../Logo";
import * as styles from "./card.css";

const Card = () => {

  const [step, setStep] = useState(0)

  const incrStep = () => setStep((prev)=>prev + incrementValue)
  const isDisabled = () => step >= totalBoards

  return (
    <article className={styles.card}>
      <Logo />
      <CardHeader />
      <CardBody />
      <CardProgress step={step} />
      <CardFooter incrStep={incrStep} isDisabled={isDisabled} />
    </article>
  )
}

export default Card