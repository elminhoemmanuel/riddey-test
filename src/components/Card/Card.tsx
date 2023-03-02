import Logo from "../Logo";
import * as styles from "./card.css";

const Card = () => {
  return (
    <article className={styles.card}>
      <Logo />
    </article>
  )
}

export default Card