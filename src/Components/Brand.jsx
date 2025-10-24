import useToys from "../Hooks/Hook";
import Marquee from "react-fast-marquee";
const Brand = () => {
  const { toys } = useToys();
  const brand = toys.map((toy) => (
    <h1 key={toy.toyId} className="text-xl font-bold text-[#333333]">
      {toy.brandName}
    </h1>
  ));
  return (
    <div>
      <h1 className="  text-3xl  font-bold text-center text-[#333333]">
        Brands
      </h1>
      <div className="gradientBtn my-5 md:my-10 ">
        <Marquee autoFill={true}>
          <div className="flex  p-4 gap-5  ">{brand}</div>
        </Marquee>
      </div>
    </div>
  );
};

export default Brand;
