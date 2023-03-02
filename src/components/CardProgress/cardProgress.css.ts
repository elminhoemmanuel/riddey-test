import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";


export const holder = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }),
  {
    marginTop: "-1rem",
    width: "100%"
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
    fontSize: "0.875rem",
  }
])

export const subtitle = style([
  sprinkles({
    display: "block",
    textAlign: "center",
    color: "primary"
  }),
  {
    fontSize: "0.75rem",
    marginBottom: "0.4rem",
    fontWeight: 700,
  }
])