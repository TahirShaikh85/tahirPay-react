import React from "react";
import Navbar from "../components/Navbar";
import Error from "../components/Error";
import Footer from "../components/Footer";

const Error404 = () => {
  return (
    <>
      <Navbar />
      <Error />
      <Footer />
    </>
  );
};

export default Error404;