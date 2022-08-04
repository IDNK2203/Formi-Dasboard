import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 3500,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2500,
    amt: 2000,
  },
  {
    name: "Page R",
    uv: 4000,
    amt: 2000,
  },
  {
    name: "Page S",
    uv: 3080,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 2500,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 4500,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 2000,
    amt: 2100,
  },
];
const _AreaChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 10,
          bottom: 30,
        }}
      >
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#ED1690"
          fill="#2e2e56a8"
          strokeWidth={6}
          activeDot={{ stroke: "white", strokeWidth: 2, r: 10 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default _AreaChart;
