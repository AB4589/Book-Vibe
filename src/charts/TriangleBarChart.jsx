import React from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
// import { RechartsDevtools } from "@recharts/devtools"; // optional

const data = [
  { name: "Page A", uv: 400 },
  { name: "Page B", uv: 300 },
  { name: "Page C", uv: 300 },
  { name: "Page D", uv: 200 },
  { name: "Page E", uv: 278 },
  { name: "Page F", uv: 189 },
];

const margin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 5,
};

// Custom triangle shape
const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
   Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  if (!x || !y || !width || !height) return null;

  return (
    <path
      d={getPath(x, y, width, height)}
      stroke="none"
      fill={fill}
    />
  );
};

export default function TriangleBarChart() {
  return (
    <BarChart width={600} height={300} data={data} margin={margin}>
      <XAxis dataKey="bookName" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} />
      {/* <RechartsDevtools /> */}
    </BarChart>
  );
}