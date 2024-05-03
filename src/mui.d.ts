import { Theme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxl: true;
    xxxl: true;
  }

  interface SimplePaletteColorOptions {
    "950"?: string
    "50"?: string
    "0"?: string
  }

  interface Palette {
    greyscale: PaletteColor;
  }

  interface PaletteOptions {
    greyscale: PaletteColorOptions;
  }

  interface TypographyVariants {
    label: React.CSSProperties;
    bodyBold: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    label?: React.CSSProperties;
    bodyBold?: React.CSSProperties;
  }

  export function createTheme(options?: ThemeOptions): Theme;
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    label: true;
    bodyBold: true;
  }
}