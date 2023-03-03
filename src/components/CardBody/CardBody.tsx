import * as styles from "./cardBody.css";
import CheckIcon from "../../assets/check.png"

type Feature = {
  id: number;
  text: React.ReactNode;
}

const features: Feature[] = [
  {
    id: 1,
    text: <p><span className={styles.feature}>Feature #1</span> - Etiam convallis,<br /> nibh vitae dui risus</p>
  },
  {
    id: 2,
    text: <p><span className={styles.feature}>Feature #2</span> - Etiam convallis,<br /> nibh vitae dui risus</p>
  },
  {
    id: 3,
    text: <p><span className={styles.feature}>Feature #3</span> - Etiam convallis,<br /> nibh vitae dui risus</p>
  }
]

const CardBody = () => {
  return (
    <section className={styles.holder}>
      {features?.map((feature)=>(
        <div className={styles.featureHolder} key={feature.id}>
          <div><img src={CheckIcon} alt="Check icon"/></div>
          <div>{feature?.text}</div>
        </div>
      ))}
    </section>
  )
}

export default CardBody