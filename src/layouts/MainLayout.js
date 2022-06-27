import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const MainLayout = (props) => {
  return (
    <div>
      <Header />
      <Menu />

      {props.children}

      <Footer />
    </div>
  );
};

export default MainLayout;
