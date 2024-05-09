import { Box, Typography } from "@mui/material";
import Card from "@/components/Card";
import React, { useEffect, useState } from "react";
import { fetchEventHistory } from "@/services/applications";
import Divider from "@/components/Divider";
import { getRelativeTimeString } from "@/library/datetime";
import StatusTag from "@/components/StatusTag";
import useApplicationsStore from "@/stores/application";

const EventHistory: React.FC = () => {
  const [ eventData, setEventData ] = useState([]);
  const selectedApp = useApplicationsStore(state => state.selectedApplication);

  useEffect(() => {
    const _fetchData = async () => {
      const data = await fetchEventHistory(selectedApp?.id);
      setEventData(data);
    };

    _fetchData();
  }, [ selectedApp ]);

  return (
    <Card elevated flex={1} padding={"24px"}>
      <Typography variant="subtitle1">Event History</Typography>

      <Box marginTop={"16px"}>
        <Box display={"flex"}>
          <Box display={"flex"} padding={"12px 16px"} width={"30%"}>
            <Typography variant={"bodyBold"}>Event</Typography>
          </Box>

          <Box display={"flex"} padding={"12px 16px"} width={"30%"}>
            <Typography variant={"bodyBold"}>Version</Typography>
          </Box>

          <Box display={"flex"} padding={"12px 16px"} flex={1}>
            <Typography variant={"bodyBold"}>Status</Typography>
          </Box>
        </Box>

        {eventData.slice(0, 4).map(row => (
          <React.Fragment key={row.id}>
            <Divider color={"greyscale.200"} />

            <Box display={"flex"}>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} padding={"12px 16px"} width={"30%"}>
                <Typography>{row.event}</Typography>
                <Typography variant="caption">{getRelativeTimeString(row.timestamp * 1000)}</Typography>
              </Box>

              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} padding={"12px 16px"} width={"30%"}>
                <Typography>{row.version}</Typography>
              </Box>

              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} padding={"12px 16px"} flex={1}>
                <StatusTag variant={"event"} status={row.status} />
              </Box>
            </Box>
          </React.Fragment>
        ))}

        {(eventData.length > 4) && (
          <Typography color="primary.800" sx={{ textDecoration: "underline", cursor: "pointer" }}>{"View more"}</Typography>
        )}
      </Box>
    </Card>
  )
};

export default EventHistory;
