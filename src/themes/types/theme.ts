export interface ThemePalette {
  backgroundDark: string;
  backgroundLight: string;
  foregroundLight: string;
  foregroundDark: string;
  accentLight: string;
  accentDark: string;
  textLight: string;
  textDark: string;
}

// export interface Theme {
//   primary: ThemeColor;
//   secondary: ThemeColor;
//   accent: ThemeColor;
//   background: string;
// }

export interface ThemeSpacing {
  xSmall: string;
  small: string;
  medium: string;
  large: string;
  xLarge: string;
}

export interface Theme {
  id: string;
  palette: ThemePalette;
  spacing: ThemeSpacing;
}
