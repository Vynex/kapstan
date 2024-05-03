import { styled, ToggleButton, ButtonProps } from "@mui/material";

export const PrimaryToggleButton = styled(ToggleButton)<ButtonProps>(({ theme }) => ({
  width: "100%",
  padding: "12px 16px",

  borderRadius: "4px",
  border: "none",

  justifyContent: "flex-start",
  gap: "16px",

  textTransform: "unset",
  fontWeight: "bold",
  color: theme.palette.greyscale[0],
}));
