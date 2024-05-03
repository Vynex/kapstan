import { Box } from "@mui/material";
import BrandLogoIcon from "@assets/icons/logomark.svg?react";
import BrandTypeIcon from "@assets/icons/logotype.svg?react";

const BrandLogo: React.FC<{ full: boolean }> = ({ full }) => {
  return (
    <Box display={"flex"} alignItems={"center"} height={"100%"}>
      <BrandLogoIcon style={{ marginRight: full ? 10 : 0 }} />
      {full && <BrandTypeIcon />}
    </Box>
  )
};

export default BrandLogo;
