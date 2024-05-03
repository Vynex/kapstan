import { Box } from "@mui/material";

import ServiceInfo from "./service-info";
import EventHistory from "./event-history";
import SystemMetrics from "./system-metrics";

const Overview: React.FC = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} rowGap={"16px"}>
      <ServiceInfo />

      <Box display={"flex"} minHeight={"396px"} columnGap={"16px"}>
        <SystemMetrics />
        <EventHistory />
      </Box>
    </Box>
  );
};

export default Overview;
