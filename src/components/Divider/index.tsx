import { Box } from "@mui/material";

type Props = {
  color: string;
}

const Divider: React.FC<Props> = ({ color }) => {
  return (
    <Box height="1px" width="100%" bgcolor={color} />
  );
};

export default Divider;
