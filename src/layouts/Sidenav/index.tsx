import { useState } from "react";
import { Box, Typography } from "@mui/material";
import BrandLogo from "@/components/BrandLogo";
import { SidebarButton } from "@/components/Button";

import { FOOTER_LINKS, HEADER_LINKS, MAIN_LINKS } from "./constants";
import ArrowLeftIcon from "@assets/icons/actions/arrow-double-left.svg?react";
import Divider from "@/components/Divider";
import { GhostIconButton } from "@/components/IconButton";

const Sidenav: React.FC = () => {
  const [ isExpanded, setIsExpanded ] = useState(true);

  const renderLink = ({ title, badge, Icon }) => {
    const isActive = title === "Applications";

    const iconComponent = (
      <Box height={"20px"} width={"20px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Icon />
      </Box>
    );

    return (
      <SidebarButton key={title} sx={{ margin: "4px 0" }} ownerState={{ isActive }}>
        {iconComponent}

        {isExpanded && (
          <Box display={"flex"} flex={1} alignItems={"center"} marginLeft={"12px"}>
            <Typography color={"greyscale.0"} variant={isActive ? "bodyBold" : "body1"}>{title}</Typography>

            {badge && (
              <Box padding={"2px 8px"} borderRadius={"2px"} bgcolor={"primary.800"} marginLeft={"16px"}>
                <Typography color={"primary.100"} variant={"caption"}>{badge}</Typography>
              </Box>
            )}
          </Box>
        )}
      </SidebarButton>
    )
  };

  const handleToggle = () => {
    setIsExpanded(old => !old);
  };

  return (
    <Box display={"flex"} flexDirection={"column"} height={"100vh"} component={"nav"} bgcolor={"primary.950"} width={isExpanded ? "220px" : "76px"}>
      <Box padding={isExpanded ? "16px 24px" : "16px 20px"}>
        <BrandLogo full={isExpanded} />
      </Box>

      <Divider color={"primary.900"} />

      <Box padding={"4px 16px 8px"}>
        {HEADER_LINKS.map(renderLink)}
      </Box>

      <Divider color={"primary.900"} />

      <Box padding={"4px 16px 8px"}>
        {MAIN_LINKS.map(renderLink)}
      </Box>

      <Divider color={"primary.900"} />

      <Box padding={"4px 16px"} flex={1} display={"flex"} flexDirection={"column"} justifyContent={"flex-end"}>
        {FOOTER_LINKS.map(renderLink)}
      </Box>

      <Divider color={"primary.900"} />

      <Box padding={"16px 28px"}>
        <GhostIconButton onClick={handleToggle} sx={{ padding: "4px" }}>
          <ArrowLeftIcon />
        </GhostIconButton>
      </Box>
    </Box>
  );
};

export default Sidenav;
