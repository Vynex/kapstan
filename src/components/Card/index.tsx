import { Box, BoxProps } from "@mui/material";

type CardProps = BoxProps & {
  bordered?: boolean;
  elevated?: boolean;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ elevated, bordered, children, ...props }) => {

  return (
    <Box
      bgcolor={"greyscale.0"}
      display={"flex"}
      flexDirection={"column"}
      boxShadow={elevated ? "1px 3px 4px rgba(0, 0, 0, 0.06), 1px 5px 4px -1px rgba(0, 0, 0, 0.06)" : ""}
      border={bordered ? "1px solid" : ""}
      borderColor={"greyscale.200"}
      borderRadius={"8px"}
      {...props}
    >
      {children}
    </Box>
  )
};

export default Card;
