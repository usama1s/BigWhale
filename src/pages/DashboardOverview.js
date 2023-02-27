import React from "react";
import Bouns from "../components/Bouns";
import DashboardText from "../uiComponents/DashboardText";
import "./DashboardOverview.css";
import "./DashboardPage.css";
import WalletCard from "../components/WalletCard";

export const DashboardOverview = () => {
  return (
    <div className="container">
      <div className="dashboard">
        <DashboardText />
        <WalletCard />
        <Bouns />
      </div>
    </div>
  );
};
