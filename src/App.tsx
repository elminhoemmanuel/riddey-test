import Card from "./components/Card";
import * as styles from "./styles/app.css";
import "./styles/globals.css"


const App = () => {
  return (
    <div className={styles.backdrop}>
      <Card />
    </div>
  )
}

export default App;
