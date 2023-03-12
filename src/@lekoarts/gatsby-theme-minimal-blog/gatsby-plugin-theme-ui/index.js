import { merge } from "theme-ui";
// import tailwind from "@theme-ui/preset-tailwind";
import theme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index";
// import { lightThemeVars, darkThemeVars } from "@lekoarts/gatsby-theme-minimal-blog/src/prism-themes"

const myTheme = merge( theme, {
  config: {
    initialColorModeName: `dark`,
  }
});

export default myTheme;