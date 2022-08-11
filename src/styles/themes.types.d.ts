import "styled-components";

interface Colors {
  mexicanRed: string;
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