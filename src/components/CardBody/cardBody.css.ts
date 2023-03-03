import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";


export const holder = style([
  sprinkles({
    display: "block",
  }),
  {
    margin: "1.8rem 0",
  }
])

export const feature = style([
  sprinkles({
    color: "header"
  }),
  {
    fontWeight: "bold",
  }
])

export const featureHolder = style([
  sprinkles({
    display: "flex",
  }),
  {
    gap: "8px",
    fontSize: "0.75rem",
    marginBottom: "1rem",
  }
])