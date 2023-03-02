import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";


export const holder = style([
  sprinkles({
    display: "block",
  }),
  {
    padding: "0 0.75rem"
  }
])

export const title = style([
  sprinkles({
    display: "block",
    textAlign: "center",
    marginBottom: "medium",
    color: "header"
  }),
  {
    fontWeight: 700,
    fontSize: "1.25rem",
  }
])

export const subtitle = style([
  sprinkles({
    display: "block",
    textAlign: "center"
  }),
  {
    fontSize: "0.875rem",
  }
])