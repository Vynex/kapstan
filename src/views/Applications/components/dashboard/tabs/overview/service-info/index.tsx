import { Box, CircularProgress, Typography } from "@mui/material";
import Collapsible from "@/components/Collapsible";
import { PrimaryButton } from "@/components/Button";
import useApplicationsStore from "@/stores/application";
import SuccessIcon from "@assets/icons/status/icon-success.svg?react";
import { getRelativeTimeString } from "@/library/datetime";

const ServiceInfo: React.FC = () => {
  const selectedApp = useApplicationsStore(state => state.selectedApplication);

  return (
    <Collapsible title={"Service Info"}>
      <Box display={"flex"} paddingBottom={"20px"}>
        {!selectedApp ? <CircularProgress /> : <>
          <Box width={"160px"} display={"flex"} flexDirection={"column"}>
            <Typography variant={"caption"}>{"Current version"}</Typography>

            <Box display={"flex"} alignItems={"center"} columnGap={"8px"}>
              <SuccessIcon />
              <Typography variant={"body1"}>{(selectedApp.version === selectedApp.desiredVersion) ? "In sync" : "Out of sync"}</Typography>
            </Box>
          </Box>

          <Box flex={1} display={"flex"} flexDirection={"column"}>
            <Typography variant={"caption"}>{"Desired version"}</Typography>
            <Typography variant={"body1"}>{selectedApp.desiredVersion}</Typography>
          </Box>
        </>}
      </Box>

      <Box display={"flex"} paddingTop={"4px"} justifyContent={"space-between"} alignItems={"center"}>
        {selectedApp && <>
          <PrimaryButton>Deploy</PrimaryButton>
          <Typography variant={"caption"}>{"Last updated"} {getRelativeTimeString(selectedApp.updatedAt * 1000)}</Typography>
        </>}
      </Box>
    </Collapsible>
  )
};

export default ServiceInfo;
