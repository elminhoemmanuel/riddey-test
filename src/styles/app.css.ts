import { style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";
import { vars } from "./vars.css";


export const headingStyle = style([
  sprinkles({
    color: "primary"
  }),
  {
    ':hover': {
      color: vars.color.black
    }
  }
])