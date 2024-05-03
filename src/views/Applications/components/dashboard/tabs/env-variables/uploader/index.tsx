import { Box, Typography } from "@mui/material";

import Card from "@/components/Card";
import { GhostIconButton } from "@/components/IconButton";

import UpIcon from "@assets/icons/actions/arrow-base-up.svg?react";
import { OutlineButton, PrimaryButton } from "@/components/Button";

const Uploader = ({ handleCancel }) => {
  return (
    <Card padding={"12px"} bordered>
      <Card bgcolor={"greyscale.100"} border={"1px dashed"} borderColor={"greyscale.300"} padding={"24px 8px 12px"} rowGap={"12px"} borderRadius={"4px"} sx={{ cursor: "pointer" }}>
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
    </Card>
  );
};

export default Uploader;
