import Button from "../Button";
import * as styles from "./cardFooter.css";

type Props = {
  incrStep: ()=>void;
  isDisabled: ()=>boolean;
}

const CardBody = ({ isDisabled, incrStep }: Props) => {
  return (
    <footer className={styles.footer}>
      <Button
        onClick={incrStep}
        disabled={isDisabled()}
      >
        Add New Board
      </Button>
    </footer>
  )
}

export default CardBody