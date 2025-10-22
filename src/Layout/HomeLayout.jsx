import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const HomeLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className="bg-[#F8F0FF]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
      <ToastContainer autoClose={500} />
    </>
  );
};

export default HomeLayout;
