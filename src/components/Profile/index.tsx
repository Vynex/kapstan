import { Avatar, Box, Typography } from "@mui/material";
import { GhostIconButton } from "../IconButton";
import ChevronDownIcon from "@assets/icons/actions/chevron-down.svg?react";

const Profile: React.FC = ({ name = "John Doe" }) => {
  return (
    <Box width={"162px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
      <Box display={"flex"} alignItems={"center"}>
        <Avatar sx={{ bgcolor: "#FFD07B" }}>{getInitials(name)}</Avatar>
        <Typography sx={{ marginLeft: "8px" }} color="greyscale.800">{name}</Typography>
      </Box>

      <Box display={"flex"} flex={1} alignItems={"center"} justifyContent={"center"}>
        <GhostIconButton>
          <ChevronDownIcon />
        </GhostIconButton>
      </Box>
    </Box>
  );
};

const getInitials = (fullname: string) => {
  return fullname.split(" ").map(word => word[0]).join("");
};

export default Profile;
