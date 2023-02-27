import React from "react";
import HeroSection from "../components/HeroSection";
import WalletCard from "../components/WalletCard";
import DashboardText from "../uiComponents/DashboardText";
import "./DashboardPage.css";

const DashboardPage = () => {
  return (
    <div className="container">
      <div className="dashboard">
        <DashboardText />
        <WalletCard />
        <HeroSection />
      </div>
    </div>
  );
};

export default DashboardPage;
