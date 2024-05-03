import { useState } from "react";

import { Box, Collapse, Typography } from "@mui/material";
import { GhostIconButton } from "../IconButton";
import ChevronDownIcon from "@assets/icons/actions/chevron-down.svg?react";
import Card from "../Card";

interface IProps {
  title: string;
  children?: React.ReactNode;
}

const Collapsible: React.FC<IProps> = ({ title = "", children }) => {
  const [ isExpanded, setIsExpanded ] = useState(true);

  const handleToggle = () => {
    setIsExpanded(oldState => !oldState);
  };

  return (
    <Card padding={"16px"} bordered>
      <Box bgcolor={"greyscale.0"} display={"flex"} justifyContent={"space-between"}>
        <Typography variant="subtitle1">{title}</Typography>

        <GhostIconButton onClick={handleToggle} sx={{ rotate: isExpanded ? "180deg" : "" }}>
          <ChevronDownIcon />
        </GhostIconButton>
      </Box>

      <Collapse in={isExpanded}>
        <Box marginTop={"16px"}>
          {children}
        </Box>
      </Collapse>
    </Card>
  );
};

export default Collapsible;
