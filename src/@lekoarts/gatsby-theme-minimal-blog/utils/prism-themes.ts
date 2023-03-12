import github from "prism-react-renderer/themes/github"
import nightOwl from "prism-react-renderer/themes/nightOwl"
import { themeWithCssVariables } from "@lekoarts/gatsby-theme-minimal-blog/src/utils/prism-utils"

const { theme: lightTheme, variables: lightThemeVars } = themeWithCssVariables(github)
const { theme: darkTheme, variables: darkThemeVars } = themeWithCssVariables(nightOwl)

export { lightTheme, darkTheme, lightThemeVars, darkThemeVars }
