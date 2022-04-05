import React from "react";
import Barchart from "../Chart/Barchart";
import Linechart from "../Chart/Linechart";
import useDashboard from "../hooks/useDashboard";

const Dashboard = () => {
  const [dashboard, setDashboard] = useDashboard();
  return (
    <div className="h-screen flex flex-col justify-center items-center pb-36 ">
      <div className="mb-12">
        <Barchart data={dashboard} />
      </div>
      <Linechart data={dashboard} />
    </div>
  );
};

export default Dashboard;
