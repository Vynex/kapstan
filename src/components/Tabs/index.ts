import { styled, TabsProps, Tabs, Tab, TabTypeMap } from "@mui/material";

export const PrimaryTabs = styled(Tabs)<TabsProps>(({ theme }) => ({
  height: "36px",
  minHeight: "unset",

  "& .MuiTab-root.Mui-selected": { color: theme.palette.primary[800], fontWeight: 700 },
  "& .MuiTabs-indicator": { backgroundColor: theme.palette.primary[800] }
}));

export const PrimaryTab = styled(Tab)<TabTypeMap>(({ theme }) => ({
  height: "36px",
  minHeight: "unset",
  textTransform: "unset",
  borderBottom: "1px solid",
  borderColor: theme.palette.greyscale[200],
}));
