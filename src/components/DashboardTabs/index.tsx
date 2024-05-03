import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

interface SwitcherProps {
  tabs?: {
    title: string;
    badge?: boolean;
    disabled?: boolean;
    Icon: React.FC;
    render?: React.ReactNode;
  }[],

  initialTab?: number;
}

interface IconComponentProps {
  Icon: React.FC;
}

const IconComponent: React.FC<IconComponentProps> = ({ Icon }) => (
  <Box height={"16px"} width={"16px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
    <Icon />
  </Box>
);

const DashboardTabs: React.FC<SwitcherProps> = ({ tabs = [], initialTab = 0 }) => {
  const [ activeTab, setActiveTab ] = useState(initialTab);

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box display={"flex"} columnGap={"20px"}>
        {tabs.map(({ title, disabled, badge, Icon }, i) => {
          const isActive = activeTab === i;
          return (
            <Box key={i} alignItems={"center"} display={"flex"} padding={"16px 0"} onClick={() => !disabled && setActiveTab(i)} columnGap={"4px"} sx={{ cursor: "pointer" }}>
              <IconComponent Icon={Icon} />
              <Typography variant={isActive ? "bodyBold" : "body1"}>{title}</Typography>

              {badge && (
                <Box height={"12px"} width={"12px"}>
                  <Box height={"6px"} width={"6px"} borderRadius={"3px"} bgcolor={"error.main"} />
                </Box>
              )}
            </Box>
          )
        })}
      </Box>

      <Box>
        {tabs[activeTab].render}
      </Box>
    </Box>
  );
};

export default DashboardTabs;
