import { Link } from "react-router";
import useToys from "../../Hooks/Hook";
import MyContainer from "../../MyContainer/MyContainer";
import Spinner from "../Spinner/Spinner";
import Card from "../Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Discount = () => {
  const { toys, loading } = useToys();

  const discountToys = toys.filter((t) => Number(t.discount) > 0);

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <MyContainer className={"py-5 "}>
      <div className="flex justify-between items-center ">
        <h1 className=" py-3 md:py-6 text-3xl font-bold text-[#333333]">
          Discount Toys
        </h1>
        <Link
          to={"/toys"}
          className=" py-3 text-sm hover:underline hover:text-[#c76765] font-bold text-[#333333]"
        >
          All Toys
        </Link>
      </div>

      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {discountToys.map((toy) => (
          <SwiperSlide key={toy.id}>
            <Card toy={toy} key={toy.id}></Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </MyContainer>
  );
};

export default Discount;
