import * as styles from "./logo.css";
import LogoImage from "../../assets/badge.png";

const Logo = () => {
  return (
    <figure className={styles.holder}>
      <img src={LogoImage} alt="Logo image" />
    </figure>
  )
}

export default Logo