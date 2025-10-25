import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "@smastrom/react-rating/style.css";
import { Outlet, useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Spinner from "../Components/Spinner/Spinner";

const HomeLayout = () => {
  const { loading } = useContext(AuthContext);

  const location = useLocation();
  const [pathLoading, setPathLoading] = useState(false);

  useEffect(() => {
    setPathLoading(true);
    const timer = setTimeout(() => setPathLoading(false), 700);
    return () => clearTimeout(timer);
  }, [location]);

  if (loading || pathLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <>
      <Navbar></Navbar>

      <main className="bg-[#FFF6EC]">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </>
  );
};

export default HomeLayout;
