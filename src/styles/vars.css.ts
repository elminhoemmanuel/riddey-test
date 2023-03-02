import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  space: {
    none: "0",
    small: "4px",
    medium: "8px",
    large: "16px",
    xlarge: "64px",
    "1/2": "50%",
    "1/5": "20%",
  },
  color: {
    white: "#fff",
    black: "#000",
    primary: "#E26559",
    header: "#3C4043",
    normal: "#636669"
  },
  fontFamily: {
    body: 'Montserrat, Arial',
  },
});
