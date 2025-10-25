import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router";
import "./style.css";
import { useRef } from "react";
const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        <SwiperSlide>
          <div
            className="hero h-90"
            style={{
              backgroundImage: "url(https://i.ibb.co.com/Y4fKshGB/photo1.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="">
                <h1 className="mb-5 md:text-5xl text-2xl font-bold">
                  Where Imagination Comes to Play!
                </h1>
                <p className="mb-5 md:max-w-md text-base mx-auto">
                  Discover a magical world of toys that spark creativity,
                  laughter, and endless adventures — all in one place!
                </p>
                <Link
                  className="btn  
               gradient"
                >
                  Discover More ➡
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-90 "
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/tMNq8zRG/jane-slack-smith-rxv-1-MOxas-E-unsplash-2.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="">
                <h1 className="mb-5 md:text-5xl text-2xl font-bold">
                  Toys That Grow With Your Child
                </h1>
                <p className="mb-5  md:max-w-md text-base mx-auto">
                  From building blocks to brainy puzzles, explore toys that
                  inspire learning while keeping playtime exciting!
                </p>
                <Link
                  to={"/toys"}
                  className="btn  
                 gradient"
                >
                  Discover More ➡
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-90"
            style={{
              backgroundImage: "url(https://i.ibb.co.com/NnbpQj81/car.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="">
                <h1 className="mb-5 md:text-5xl text-2xl font-bold">
                  Colorful Fun for Every Little Dreamer
                </h1>
                <p className="mb-5 md:max-w-md text-base mx-auto">
                  Find bright, safe, and joyful toys designed to bring smiles
                  and make every moment a memory.
                </p>
                <Link to={"/toys"} className="btn  gradient">
                  Discover More ➡
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-90"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/LdPCmv64/ryan-quintal-xio-Kw-Vlp5j-E-unsplash-1.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="">
                <h1 className="mb-5 md:text-5xl text-2xl font-bold">
                  Your Local Toy Wonderland!
                </h1>
                <p className="mb-5 md:max-w-md text-base mx-auto">
                  Support local toy sellers and discover one-of-a-kind treasures
                  made with love for your little ones.
                </p>
                <Link to={"/toys"} className="btn   gradient">
                  Discover More ➡
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-90"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/Myqt7qtn/jason-leung-wp-Sn-BSnz8-unsplash-1.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="">
                <h1 className="mb-5 md:text-5xl text-2xl font-bold">
                  Learn Through Playtime Magic!
                </h1>
                <p className="mb-5 md:max-w-md text-base mx-auto">
                  Explore toys that make every giggle a moment of growth — where
                  fun meets imagination and learning begins naturally.
                </p>
                <Link to={"/toys"} className="btn gradient">
                  Discover More ➡
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div
          className="autoplay-progress
           absolute right-3 bottom-3  
           z-10 flex items-center pr-3
            justify-center w-15 h-15"
          slot="container-end"
        >
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="#dc7977"
              strokeWidth="1"
              fill="none"
              strokeDasharray="100"
              strokeDashoffset="calc(100.5 * (1 - var(--progress, 0)))"
              className="transition-[stroke-dashoffset] duration-200 ease-linear"
            ></circle>
          </svg>
          <span
            className="md:text-xl text-base absolute left-4 text-[#e57368] "
            ref={progressContent}
          ></span>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
