import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";


export const holder = style([
  sprinkles({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "large",
  }),
  {
    border: "1px solid #D8D9D9",
  }
])