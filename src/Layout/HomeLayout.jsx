import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "@smastrom/react-rating/style.css";
import { Outlet, useLocation } from "react-router";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Spinner from "../Components/Spinner/Spinner";

const HomeLayout = () => {
  const { loading } = useContext(AuthContext);

  const location = useLocation();
  const [pathLoading, setPathLoading] = useState(false);
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (!loading && prevPath.current !== location.pathname) {
      setPathLoading(true);
      prevPath.current = location.pathname;

      const timer = setTimeout(() => setPathLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, loading]);

  if (loading || pathLoading) return <Spinner />;

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
