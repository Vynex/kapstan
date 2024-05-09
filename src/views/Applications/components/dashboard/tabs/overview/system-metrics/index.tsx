import { useEffect, useState } from "react";
import useApplicationsStore from "@/stores/application";

import { Box, Tab, Typography } from "@mui/material";
import Card from "@/components/Card";

import HighChartWrapper from "@components/Highcharts";
import { fetchCpuUtilization, fetchMemoryUtilization } from "@/services/applications";
import { PrimaryTab, PrimaryTabs } from "@/components/Tabs";

const SystemMetrics: React.FC = () => {
  const applications = useApplicationsStore(state => state.applications);
  const selectedApp = useApplicationsStore(state => state.selectedApplication);

  const [ activeTab, setActiveTab ] = useState<number>(0);
  const [ cpuData, setCpuData ] = useState([]);
  const [ memData, setMemData ] = useState([]);

  const handleChangeTab = (value: number) => {
    setActiveTab(value);
  };

  const processData = (data, key) => {
    const applicationMap = {};  // appId to app data
    const uniqueData = {};      // appId to graph data

    applications.forEach(app => applicationMap[app.id] = app);

    data.forEach(datum => {
      if (!uniqueData[datum.applicationId]) uniqueData[datum.applicationId] = [];
      uniqueData[datum.applicationId].push([ Number(datum.timestamp * 1000), Number(datum[key]) ]);
    });

    const finalData = Object.entries(uniqueData).map(([ appId, appData ]) => {
      return {
        name: applicationMap[appId].name,
        data: appData,
        marker: { enabled: false }
      };
    });

    return finalData;
  };


  useEffect(() => {
    const _fetchData = async () => {
      if (!selectedApp) return;

      const cpuData = await fetchCpuUtilization(selectedApp.id);
      const memData = await fetchMemoryUtilization(selectedApp.id);

      setCpuData(cpuData);
      setMemData(memData);
    };

    _fetchData();

  }, [ selectedApp, applications ]);

  return (
    <Card bordered elevated flex={1} padding={"24px"}>
      <Typography variant="subtitle1">System metrics</Typography>

      <PrimaryTabs value={activeTab} onChange={(_, value) => handleChangeTab(value)} sx={{ width: "100%" }}>
        {TAB_CONFIG.map(({ title }, i) => (
          <PrimaryTab key={i} value={i} label={title} sx={{ flex: 1 }} />
        ))}
      </PrimaryTabs>

      <Box display={"flex"} flexDirection={"column"} paddingTop={"12px"} rowGap={"12px"}>
        <Typography>{TAB_CONFIG[activeTab].title}</Typography>

        <HighChartWrapper
          options={{
            chart: { type: "spline", style: { fontFamily: "Inter" }, height: 280 },
            credits: { enabled: false },
            colors: CHART_COLORS,
            title: null,
            xAxis: { type: "datetime", labels: { format: "{value:%H:%m%p}", style: { textTransform: "lowercase" } } },
            yAxix: { labels: { enabled: false }, title: false },
            series: activeTab ? processData(memData, "memoryUtilization") : processData(cpuData, "cpuUtilization"),
            tooltip: {
              pointFormat: "<span style='color:{point.color}'>\u25CF</span> {series.name}: <b>{point.y:,.2f}%</b><br/>",
            }
          }}
        />
      </Box>
    </Card>
  )
};

const TAB_CONFIG = [
  { title: "CPU" },
  { title: "Memory" },
];

const CHART_COLORS = [ "#6E27D5", "#B88BFE", "#F39C12", "#FF00E5", "#00B88C" ];

export default SystemMetrics;
