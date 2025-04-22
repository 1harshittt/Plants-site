import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Common/Header/Index";
import Footer from "../Shared/Common/Footer";
import "./DefaultLayout.scss";

const DefaultLayout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
