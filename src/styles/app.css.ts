import { style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";
import { vars } from "./vars.css";


export const backdrop = style([
  sprinkles({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  {
    background: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    backdropFilter: `${vars.space.small}`,
  }
])