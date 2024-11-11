"use client";
import React, { useMemo } from "react";
import { Chart } from "react-charts";

export default function Home() {
  const data = useMemo(
    () => [
      {
        label: "React Charts",
        data: [
          { date: 23, stars: 12 },
          { date: 25, stars: 22 },
          { date: 33, stars: 123 },
          { date: 44, stars: 2023 },
        ],
      },
    ],
    []
  );

  const primaryAxis = useMemo(
    () => ({
      getValue: (datum) => datum.date,
    }),
    []
  );

  const secondaryAxes = useMemo(
    () => [
      {
        getValue: (datum) => datum.stars,
      },
    ],
    []
  );

  return (
    <>
      <h1>Welcome to Amazon Price Tracker</h1>
      <div className="size-64">
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </div>
    </>
  );
}
