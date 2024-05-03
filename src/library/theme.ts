import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      950: "#37146B",
      900: "#4D1B95",
      800: "#6E27D5",
      700: "#A871FF",
      600: "#B88BFE",
      500: "#C7A5FE",
      400: "#D7BEFD",
      300: "#E6D8FC",
      200: "#ECE2FD",
      100: "#F3ECFE",
      50:  "#F9f5FE",
    },

    greyscale: {
      900: "#000000",
      800: "#333333",
      700: "#595959",
      600: "#7E7E7E",
      500: "#939393",
      400: "#A5A5A5",
      300: "#BDBDBD",
      200: "#EBEBEB",
      100: "#F8F8F8",
      0:   "#FFFFFF",
    },

    success: {
      dark: "#136652",
      main: "#00B88C",
      800:  "#6BD6BC",
      100:  "#E4F8F3",
      50:   "#F0FCF9",
    },

    error: {
      dark: "#784946",
      main: "#E91F04",
      800:  "#F27D6E",
      100:  "#FDE7E5",
      50:   "#FEF4F2",
    },

    warning: {
      dark: "#774B06",
      main: "#F39C12",
      800:  "#F7C069",
      100:  "#FEF5E6",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1280,
      xxl: 1440,
      xxxl: 1920,
    },
  },
});

const commonTypography = {
  fontFamily: "Inter",
  letterSpacing: "-0.01em",
  color: theme.palette.greyscale[700],
};

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "24px",
      ...commonTypography,
      color: theme.palette.greyscale[900],
    },

    subtitle1: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "24px",
      ...commonTypography,
    },

    body1: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "20px",
      ...commonTypography,
    },

    bodyBold: {
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "20px",
      ...commonTypography,
      color: theme.palette.greyscale[900],
    },

    label: {
      fontSize: "10px",
      fontWeight: 500,
      lineHeight: "16px",
      ...commonTypography,
    },

    caption: {
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "18px",
      ...commonTypography,
    },
  },
})

export default theme;