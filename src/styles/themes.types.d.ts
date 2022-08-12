import "styled-components";

interface Colors {
  cultured: string;
  darkCharcoal: string;
  darkLiver: string;
  eerieBlack: string;
  royalBlue: string;
  spanishGray: string;
}

interface FontWeights {
  bold: string;
  regular: string;
}

interface FontSizes  {
  size12: string;
  size14: string;
  size16: string;
  size24: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    fontWeights: FontWeights;
    fontSizes: FontSizes;
  }
}