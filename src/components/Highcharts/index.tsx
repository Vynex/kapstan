import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const HighChartWrapper: React.FC = ({ options }) => (
  <HighchartsReact highcharts={Highcharts} options={options} />
)

export default HighChartWrapper;