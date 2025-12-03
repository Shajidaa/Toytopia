import Banner from "../Components/Banner/Banner";
import Brand from "../Components/Brand";
import Choose from "../Components/Choose";
import Discount from "../Components/Discount/Discount";
import Popular from "../Components/Popular/Popular";
import UpComing from "../Components/UpComing.jsx/UpComing";

const Home = () => {
  return (
    <div>
      <title>Home| ToyTopia</title>
      <Banner></Banner>
      <Popular></Popular>
      <Discount></Discount>
      <UpComing></UpComing>
      <Brand></Brand>
      <Choose></Choose>
    </div>
  );
};

export default Home;
