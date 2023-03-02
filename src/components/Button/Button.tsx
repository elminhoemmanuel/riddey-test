import * as styles from "./button.css";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
} & Omit<React.ComponentProps<"button">, "children">

const Button = ({ children, disabled, ...rest }: ButtonProps) => {

  return (
    <button className={styles.button} disabled={disabled} {...rest}>
      {children}
    </button>
  )
}

export default Button
