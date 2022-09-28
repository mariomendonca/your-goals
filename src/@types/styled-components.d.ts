import { lightMode } from '../global/colors'
type CustomTheme = typeof lightMode

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
