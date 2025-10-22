import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[500px] border">
            <img
              className="max-h-[500px]  object-contain "
              src="https://i.ibb.co.com/TBpsccxL/1.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="max-h-[500px]  object-contain "
              src="https://i.ibb.co.com/CsnvspjY/2.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="max-h-[500px]  object-contain "
              src="https://i.ibb.co.com/qbckzJy/3.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="max-h-[500px]  object-contain "
              src="https://i.ibb.co.com/7dBzkqnD/4.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="max-h-[500px]  object-contain "
              src="https://i.ibb.co.com/KjvZSjdv/5.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="max-h-[500px]  object-contain "
              src="https://i.ibb.co.com/SwhSHQj1/6.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="max-h-[500px]  object-contain "
              src="https://i.ibb.co.com/HfxxGqrT/7.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
