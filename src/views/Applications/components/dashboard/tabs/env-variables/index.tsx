import { useState } from "react";
import { Box, Typography } from "@mui/material";

import Drawer from "@/components/Drawer";
import Card from "@/components/Card";
import { GhostIconButton } from "@/components/IconButton";

import Uploader from "./uploader";
import Form from "./form";

import AddIcon from "@assets/icons/actions/add.svg?react";
import DownIcon from "@assets/icons/actions/arrow-base-down.svg?react";
import DeleteIcon from "@assets/icons/actions/delete-lines.svg?react";
import useApplicationsStore from "@/stores/application";

const EnvVariables: React.FC = () => {
  const selectedApp = useApplicationsStore(state => state.selectedApplication);
  const envVariables = useApplicationsStore(state => state.envVariables) || {};
  const rmEnvVariable = useApplicationsStore(state => state.rmEnvVariable);

  const [ uploadOpen, setUploadOpen ] = useState(false);
  const [ formOpen, setFormOpen ] = useState(false);

  const handleAdd = () => {
    setFormOpen(true);
  };

  const handleUpload = () => {
    setUploadOpen(true);
  };

  const closeDrawer = () => {
    setUploadOpen(false);
    setFormOpen(false);
  };

  const handleDelete = (key: string) => {
    if (!selectedApp) return;
    rmEnvVariable(selectedApp.id, key);
  };

  return (
    <Box display={"flex"} flexDirection={"column"} rowGap={"16px"}>
      <Card padding={"16px"} bordered>
        <Box display={"flex"} justifyContent={"space-between"} marginBottom={"12px"}>
          <Typography variant="subtitle1">
            Environment variables
          </Typography>

          <Box display={"flex"} columnGap={"4px"}>
            <GhostIconButton onClick={handleAdd} sx={{ height: "24px", width: "24px", padding: "4px" }}>
              <AddIcon />
            </GhostIconButton>

            <GhostIconButton onClick={handleUpload} sx={{ height: "24px", width: "24px", padding: "4px" }}>
              <DownIcon />
            </GhostIconButton>
          </Box>
        </Box>

        <Box display={"flex"} flexDirection={"column"} rowGap={"12px"}>
          {(envVariables[selectedApp?.id] || []).map((variable, i) => (
             <Card key={i} bordered width={"474px"} flexDirection={"row"} padding={"11px"} justifyContent={"space-between"}>
                <Box width={"160px"}>
                  <Typography variant="bodyBold" color={"greyscale.800"}>{variable.key}</Typography>
                </Box>

                <Box flex={1}>
                  <Typography>{variable.value}</Typography>
                </Box>

                <GhostIconButton onClick={() => handleDelete(variable.key)} sx={{ height: "24px", width: "24px", padding: "4px" }}>
                  <DeleteIcon />
                </GhostIconButton>
             </Card>
          ))}

          {!(envVariables[selectedApp?.id] || []).length && (
            <Typography>
              No environment variable created.
            </Typography>
          )}
        </Box>
      </Card>

      <Drawer open={uploadOpen} onClose={closeDrawer} handleClose={closeDrawer} hideBackdrop>
        <Uploader handleCancel={closeDrawer} />
      </Drawer>

      <Drawer open={formOpen} onClose={closeDrawer} handleClose={closeDrawer} hideBackdrop>
        <Form handleCancel={closeDrawer} />
      </Drawer>
    </Box>
  );
};

export default EnvVariables;
