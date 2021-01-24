import theme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index";
import { merge } from "theme-ui";

const myTheme = merge( theme, {
  initialColorModeName: `dark`,
  colors: {
    modes: {
      dark: {
        primary: tailwind.colors.teal[5]
      }
    }
  }
});

export default myTheme;