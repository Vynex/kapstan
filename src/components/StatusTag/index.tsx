import { Box, Typography } from "@mui/material";
import React from "react";

interface IProps {
  status: string;  //change to enum
}

const StatusTag: React.FC<IProps> = ({ status, variant }: { status: string; variant: "app" | "event" }) => {
  const map = (variant === "app" ? APPLICATION_MAP : EVENT_MAP)[status] || {};
  return (
    <Box width={"max-content"} display={"flex"} padding={"3px 8px"} alignItems={"center"} bgcolor={map.bg} border={"1px solid"} borderColor={map.fg} borderRadius={"4px"} columnGap={"4px"}>
      <Box width={"8px"} height={"8px"} borderRadius={"4px"} bgcolor={map.fg} />
      <Typography variant="caption" color={map.fg}>{map.label}</Typography>
    </Box>
  )
};

export default StatusTag;

const APPLICATION_MAP = {
  deployed: { label: "Deployed", fg: "success.main", bg: "success.50" },
  uninstalled: { label: "Uninstalled", fg: "warning.main", bg: "warning.100" },
};

const EVENT_MAP = {
  successful: { label: "Successful", fg: "success.main", bg: "success.50" },
  in_progress: { label: "In progress", fg: "warning.main", bg: "warning.100" },
  failed: { label: "Failed", fg: "error.main", bg: "error.50" },
};
