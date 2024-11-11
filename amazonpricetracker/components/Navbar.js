import Image from "next/image";
import React from "react";
import { Chart } from "react-charts";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Welcome to Amazon Price Tracker</h1>
    </>
  );
}
