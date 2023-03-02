import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";


export const card = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "white"
  }),
  {
    padding: "2rem",
    boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.12)",
  }
])