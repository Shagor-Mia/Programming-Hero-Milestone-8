import React from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <Header />
      <div className="flex gap-5">
        <Sidebar />
        {isNavigating && <span>loading...</span>}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
