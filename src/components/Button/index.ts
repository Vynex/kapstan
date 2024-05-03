import { ButtonProps, Button, styled } from "@mui/material";

const commonStyles = {
  padding: "8px 24px",
  fontSize: "14px",
  fontWeight: 700,
  lineHeight: "20px",
  borderRadius: "4px",
};

export const PrimaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary[800],
  color: theme.palette.greyscale[100],
  textTransform: "unset",
  ...commonStyles,

  ":hover": {
    backgroundColor: theme.palette.primary[700],
  },
  ".MuiTouchRipple-child": {
    backgroundColor: theme.palette.primary[600],
  },
}));

export const OutlineButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.greyscale[0],
  color: theme.palette.greyscale[800],
  textTransform: "unset",

  border: "1px solid",
  borderColor: theme.palette.greyscale[800],
  ...commonStyles,

  ":hover": {
    backgroundColor: theme.palette.greyscale[100],
  },
  ".MuiTouchRipple-child": {
    backgroundColor: theme.palette.greyscale[300],
  },
}));

export const SidebarButton = styled(Button)<ButtonProps>(({ theme, ownerState = {} }) => ({
  width: "100%",
  minWidth: "unset",
  padding: "12px 16px",
  borderRadius: "4px",
  border: "none",

  justifyContent: "center",

  textTransform: "unset",

  ".MuiButton-startIcon": {
    margin: 0,
  },

  "svg, path": {
    fill: theme.palette.greyscale[0],
  },

  backgroundColor: ownerState.isActive ? theme.palette.primary[900] : undefined,

  ":hover": {
    backgroundColor: theme.palette.primary[900],
  },
  ".MuiTouchRipple-child": {
    backgroundColor: theme.palette.primary[950],
  },
}));
