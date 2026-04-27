import React from "react";
import { Bar, BarChart, XAxis, YAxis, LabelList  } from "recharts";
import { useLoaderData } from "react-router";


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



 const PagesToRead = () => {
  const margin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 5,
};
    const book = useLoaderData();
      console.log(book.books)
   return (
   <div className="flex items-center justify-center">
        <BarChart width={1200} height={600} data={book.books} margin={margin}>
        
         <XAxis dataKey="bookName" />
         <YAxis />
         <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} ><LabelList dataKey="totalPages" position="top" /></Bar>
         {/* <RechartsDevtools /> */}
       </BarChart>
   </div>
  );
}

export default PagesToRead;