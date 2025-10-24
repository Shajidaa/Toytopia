import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "@smastrom/react-rating/style.css";
import { Outlet } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Spinner from "../Components/Spinner/Spinner";

const HomeLayout = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <>
      <Navbar></Navbar>

      <main className="bg-[#fff8f7]">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </>
  );
};

export default HomeLayout;
