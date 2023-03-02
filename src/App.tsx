import { headingStyle, themeClass } from "./styles/app.css";
import "./styles/globals.css"


const App = () => {
  return (
    <div className={themeClass}>
      <h1 className={headingStyle}>
        Riddey
      </h1>
    </div>
  )
}

export default App;
