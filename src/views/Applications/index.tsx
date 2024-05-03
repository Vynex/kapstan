import { useEffect } from "react";
import useApplicationsStore from "@/stores/application";

import { Box } from "@mui/material";
import AppHeader from "./components/header";
import AppDashboard from "./components/dashboard";

import { fetchApplications } from "@/services/applications";

const Applications: React.FC = () => {
  const { setApplications, setIsLoading } = useApplicationsStore((state) => ({ setApplications: state.setApplications, setIsLoading: state.setIsLoading }))

  useEffect(() => {
    const _fetchData = async () => {
      setIsLoading(true);
      const result = await fetchApplications();

      setIsLoading(false);
      setApplications(result);
    };

    _fetchData();
  }, [ setApplications, setIsLoading ]);

  return (
    <Box component={"main"} display={"flex"} flexDirection={"column"}>
      <AppHeader />

      <Box height={"calc(100vh - 65px)"} overflow={"scroll"}>
        <AppDashboard />
      </Box>
    </Box>
  );
};

export default Applications;
