import * as styles from "./cardHeader.css";

const Card = () => {
  return (
    <header className={styles.holder}>
      <h2 className={styles.title}>Upgrade to Riddey PRO<br/> and boost productivity!</h2>
      <p className={styles.subtitle}>Pellentesque porttitor euismod ante,<br/> accumsan consequat purus!</p>
    </header>
  )
}

export default Card