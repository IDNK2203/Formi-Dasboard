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

function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      // <div className="custom-tooltip">
      //   <p className="label">{`${label} : ${payload[0].value}`}</p>
      //   {/* <p className="intro">{getIntroOfPage(label)}</p> */}
      //   <p className="desc">Anything you want can be displayed here.</p>
      // </div>
      // <div className="top-10 flex flex-col items-center bg-[#222240] mb-1 group-hover:flex rounded-md">
      //   <span className="z-10 p-2 text-xs leading-1 text-white bg-gray-600 shadow-lg rounded-md">{`${label} : ${payload[0].value}`}</span>
      //   <div className="absolute bg-[#222240] w-3 h-3 -mt-2 rotate-45 translate-y-1 bg-gray-600"></div>
      // </div>
      <div className={`relative flex flex-col items-center group`}>
        <div className="top-10 flex flex-col items-center bg-[#38385b] shadow-lg p-2 px-5 group-hover:flex rounded-md">
          <span className="z-10 p-1 text-xs leading-1 text-white  rounded-md">
            Project Meeting with
          </span>
          <div className="my-2 p-1 flex -space-x-2 overflow-hidden ">
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="absolute bg-[#38385b] w-3 h-3 -mt-4 rotate-45 translate-y-[5.5rem]"></div>
        </div>
      </div>
    );
  }

  return null;
}

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
        <Tooltip content={<CustomTooltip />} offset={10} />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#ED1690"
          fill="#2e2e56a8"
          strokeWidth={6}
          activeDot={{
            stroke: "#00ADE1",
            strokeWidth: 4,
            r: 8,
            fill: "white",
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default _AreaChart;
