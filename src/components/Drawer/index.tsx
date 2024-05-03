import { Drawer as DefaultDrawer, Box, DrawerProps } from "@mui/material";
import { GhostIconButton } from "../IconButton";

import CloseIcon from "@assets/icons/actions/close-large.svg?react";

type CustomProps = DrawerProps & {
  handleClose: () => void;
};

const Drawer: React.FC<CustomProps> = ({ handleClose, ...props }) => {
  return (
    <DefaultDrawer anchor="right" PaperProps={{ style: { width: "696px" } }} {...props}>
      <Box bgcolor={"greyscale.0"} padding={"40px 32px"}>
        <GhostIconButton onClick={handleClose} sx={{ position: "absolute", top: "16px", right: "16px" }}>
          <CloseIcon />
        </GhostIconButton>

        <Box>
          {props.children}
        </Box>
      </Box>
    </DefaultDrawer>
  )
};

export default Drawer;
