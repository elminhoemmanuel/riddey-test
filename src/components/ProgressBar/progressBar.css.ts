import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";


export const container = style({
  height: "0.3rem",
  width: '80%',
  backgroundColor: "#EBECEC",
  margin: "0 auto"
})

export const filler = style([
  sprinkles({
    display: "block",
    background: "primary"
  }),
  {
    height: '100%',
    transition: 'width 1s ease-in-out',
  }
])