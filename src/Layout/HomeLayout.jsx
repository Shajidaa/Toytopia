import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className="bg-[#F8F0FF]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default HomeLayout;
