import { useRef } from "react";
import { Box, Typography } from "@mui/material";

import Card from "@/components/Card";
import { GhostIconButton } from "@/components/IconButton";

import UpIcon from "@assets/icons/actions/arrow-base-up.svg?react";
import { OutlineButton, PrimaryButton } from "@/components/Button";
import useApplicationsStore from "@/stores/application";

const Uploader = ({ handleCancel }) => {
  const inputRef = useRef(null);
  const addEnvVariable = useApplicationsStore(state => state.addEnvVariable);
  const selectedApp = useApplicationsStore(state => state.selectedApplication);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (event) => {
    if (!selectedApp) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const textContent = e.target.result;
      const variables = textContent.split("\n");

      variables.forEach(variable => {
        const [ key, value ] = variable.split("=");
        addEnvVariable(selectedApp.id, key, value);
      });
    };

    reader.onerror = function(event) {
      console.error("File could not be read! Code " + event.target.error.code);
    };

    reader.readAsText(event.target.files[0], "utf-8");
  };

  return (
    <Card padding={"12px"} bordered>
    <Card bgcolor={"greyscale.100"} border={"1px dashed"} borderColor={"greyscale.300"} padding={"24px 8px 12px"} rowGap={"12px"} borderRadius={"4px"} sx={{ cursor: "pointer" }} position={"relative"} onClick={handleClick}>
        <Box flex={1} display={"flex"} justifyContent={"center"}>
          <GhostIconButton>
            <UpIcon />
          </GhostIconButton>
        </Box>

        <Typography variant={"bodyBold"} color={"greyscale.800"} textAlign={"center"}>
          {"Click or drag file(s) here to upload"}
        </Typography>
      </Card>

      <Typography variant={"caption"} marginTop={"4px"} marginBottom={"24px"}>
        {"Upload a .env file. It should not be greater than 5KB."}
      </Typography>

      <Box display={"flex"} justifyContent={"flex-end"} columnGap={"8px"}>
        <OutlineButton onClick={handleCancel}>
          Cancel
        </OutlineButton>

        <PrimaryButton>
          Add
        </PrimaryButton>
      </Box>

      <input ref={inputRef} onChange={handleChange} type="file" style={{ width: "100%", height: "100%", visibility: "hidden", position: "absolute", top: 0, left: 0 }} />
    </Card>
  );
};


export default Uploader;
