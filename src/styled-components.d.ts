import { Theme } from "./themes/types";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}