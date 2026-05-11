import { themes } from "prism-react-renderer"
import { themeWithCssVariables } from "@lekoarts/gatsby-theme-minimal-blog/src/utils/prism-utils"

const { theme: lightTheme, variables: lightThemeVars } = themeWithCssVariables(themes.github)
const { theme: darkTheme, variables: darkThemeVars } = themeWithCssVariables(themes.nightOwl)

export { lightTheme, darkTheme, lightThemeVars, darkThemeVars }
