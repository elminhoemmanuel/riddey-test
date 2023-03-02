import Card from "./components/Card";
import * as styles from "./styles/app.css";
import "./styles/globals.css"


const App = () => {
  return (
    <section className={styles.backdrop}>
      <Card />
    </section>
  )
}

export default App;
