import * as styles from "./logo.css";
import LogoImage from "../../assets/badge.png";

const Logo = () => {
  return (
    <div className={styles.holder}>
      <img src={LogoImage} alt="Logo image" />
    </div>
  )
}

export default Logo