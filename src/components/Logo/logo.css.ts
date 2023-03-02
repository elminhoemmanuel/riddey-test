import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";


export const holder = style([
  sprinkles({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  {
    border: "1px solid #D8D9D9",
    padding: "1.5rem",
    marginBottom: "1rem"
  }
])