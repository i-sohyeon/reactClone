import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number; 
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? ("Loading chart...") : ( <ApexCharts 
        type="line"
        series={[
          // {
          //   name: "price",
          //   data: data?.map((price) => price.close)as number[],
          // },
          {
            name: "sales",
            data: [110,12,13,14,15,16]
          },
        ]}
        options={{
          theme: {
            mode: "dark",
          },
          chart: {
            height: 500,
            width: 500,
          }}}
        />)
      }
  </div>
  );
}


export default Chart;