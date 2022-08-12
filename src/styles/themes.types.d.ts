import "styled-components";

interface Colors {
  cultured: string;
  darkCharcoal: string;
  eerieBlack: string;
  royalBlue: string;
  spanishGray: string;
}

interface FontWeights {
  bold: string;
  regular: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    fontWeights: FontWeights;
  }
}