import React from "react";

import { Box } from "@mui/material";
import Sidenav from "./Sidenav";

interface IProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Sidenav />

      <Box sx={{ bgcolor: "greyscale.100", flex: 1 }}>
        {children}
      </Box>
    </>
  );
};

export default MainLayout;
