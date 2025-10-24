import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router";
import "./style.css";
const Banner = () => {
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
      >
        <SwiperSlide>
          <div
            className="hero h-90"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/yBQvV69D/chris-hardy-H5-Ffv4-I5-ZMI-unsplash.jpg)",
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
                  className="btn hover:transform hover:scale-105
               btn-info"
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
                "url(https://i.ibb.co.com/7NTFn4LX/jane-slack-smith-rxv-1-MOxas-E-unsplash-1.jpg)",
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
                  className="btn hover:transform hover:scale-105
                 btn-info"
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
              backgroundImage:
                "url(https://i.ibb.co.com/h1hV4VNp/eric-prouzet-so-Pz-Ksh-Lkfk-unsplash.jpg)",
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
                <Link
                  to={"/toys"}
                  className="btn hover:transform hover:scale-105 btn-info"
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
              backgroundImage:
                "url(https://i.ibb.co.com/fzjLttn1/sonia-nadales-Kk6-Vl-CAMTXw-unsplash.jpg)",
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
                <Link
                  to={"/toys"}
                  className="btn hover:transform hover:scale-105 btn-info"
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
              backgroundImage:
                "url(https://i.ibb.co.com/yBpWhnJt/jason-leung-wp-Sn-BSnz8-unsplash.jpg)",
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
                <Link
                  to={"/toys"}
                  className="btn hover:transform hover:scale-105 btn-info"
                >
                  Discover More ➡
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
