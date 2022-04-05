import axios from "axios";
import { useState, useEffect } from "react";

const useDashboard = () => {
  const [dashboard, setDashboard] = useState([]);

  useEffect(() => {
    const url = "dashboardData.json";
    axios.get(url).then(({ data }) => setDashboard(data));
  }, []);
  return [dashboard, setDashboard];
};

export default useDashboard;
