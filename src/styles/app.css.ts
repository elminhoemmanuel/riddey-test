import { createTheme, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    primary: "#E26559",
    secondary: "white",
  },
  font: {
    menu: "1.5em",
  },
});

export const headingStyle = style({
  color: vars.color.primary
})