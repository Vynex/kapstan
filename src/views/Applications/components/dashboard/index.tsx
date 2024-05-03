import { useMemo } from "react";
import useApplicationsStore from "@/stores/application";

import { Box, Typography } from "@mui/material";
import { GhostIconButton } from "@/components/IconButton";
import DashboardTabs from "@/components/DashboardTabs";
import StatusTag from "@/components/StatusTag";

import Overview from "./tabs/overview";
import EnvVariables from "./tabs/env-variables";

import MonitorIcon from "@assets/icons/elements/monitor.svg?react";
import BuildIcon from "@assets/icons/elements/build.svg?react";
import AlertsIcon from "@assets/icons/status/alert-triangle.svg?react";
import HistoryIcon from "@assets/icons/elements/time-history.svg?react";
import VerticalMenuIcon from "@assets/icons/actions/menu-vertical.svg?react";

const AppDashboard: React.FC = () => {
  const selectedApp = useApplicationsStore(state => state.selectedApplication);

  const tabConfig = useMemo(() => [
    { title: "Overview",              Icon: MonitorIcon,  render: <Overview /> },
    { title: "Environment Variables", Icon: BuildIcon,    render: <EnvVariables /> },
    { title: "Alerts",                Icon: AlertsIcon,   render: null, disabled: true, badge: true },
    { title: "Event History",         Icon: HistoryIcon,  render: null, disabled: true },
  ], []);

  return (
    <Box padding={"16px 32px"} display={"flex"} flexDirection={"column"}>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Typography variant={"h1"}>{selectedApp?.name}</Typography>

        <Box display={"flex"} justifyContent={"space-between"} columnGap={"8px"}>
          <StatusTag variant={"app"} status={selectedApp?.status} />

            <GhostIconButton sx={{ height: "24px", width: "24px", padding: "4px" }}>
              <VerticalMenuIcon />
            </GhostIconButton>
        </Box>
      </Box>

      <DashboardTabs tabs={tabConfig} />
    </Box>
  );
};

export default AppDashboard;
