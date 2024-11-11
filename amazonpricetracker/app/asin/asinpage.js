"use client";
import Image from "next/image";
import React from "react";
import { Chart } from "react-charts";

export default function Page({ params }) {
  const data = [
    {
      label: " React Charts",
      data: [
        {
          date: 23,
          stars: 12,
        },
        {
          date: 25,
          stars: 22,
        },
        {
          date: 33,
          stars: 123,
        },
        {
          date: 44,
          stars: 2023,
        },
      ],
    },
  ];
}
const primaryAxis = React.useMemo(
  () => ({
    getValue: (datum) => datum.date,
  }),
  []
);

const secondaryAxes = React.useMemo(
  () => [
    {
      getValue: (datum) => datum.stars,
    },
  ],
  []
);

return (
  <div>
    My post: {params.asin}
    <div className="size-64">
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  </div>
);
