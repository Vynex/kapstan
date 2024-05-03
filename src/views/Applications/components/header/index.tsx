import useApplicationsStore from "@/stores/application";

import { Box, Skeleton } from "@mui/material";
import Divider from "@/components/Divider";
import Select from "@/components/Select";
import Profile from "@/components/Profile";

const AppHeader: React.FC = () => {
  const applications = useApplicationsStore(state => state.applications);

  const selectedApp = useApplicationsStore(state => state.selectedApplication);
  const changeApp = useApplicationsStore(state => state.changeApplication);

  const getOptions = () => {
    return applications.map(app => ({ id: app.id, value: app.id, label: app.name }));
  }

  const handleChange = (appId: number) => {
    const app = applications.find(app => app.id === appId);
    app && changeApp(app);
  };

  return (
    <Box component={"header"} height={"65px"}>
      <Box padding={"16px 32px 8px"} display={"flex"} justifyContent={"space-between"}>
        {!selectedApp ? <Skeleton width={"150px"} /> : (
          <Select label="Applications" onSelect={handleChange} value={selectedApp.id} options={getOptions()} />
        )}

        <Profile />
      </Box>

      <Divider color="greyscale.200" />
    </Box>
  );
};

export default AppHeader;
