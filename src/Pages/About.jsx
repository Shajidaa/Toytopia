import {
  FaSmile,
  FaStar,
  FaPuzzlePiece,
  FaRocket,
  FaGift,
} from "react-icons/fa";
import MyContainer from "../MyContainer/MyContainer";

export default function About() {
  return (
    <MyContainer className="min-h-screen  p-10 ">
      {/* Header Section */}
      <div className="text-center mb-5 md:mb-12">
        <h2 className="text-3xl text-[#333333] text-center font-bold mb-2 md:mb-4">
          About Us
        </h2>
      </div>

      {/* About Section */}
      <div className="bg-white backdrop-blur-md p-10 rounded-3xl shadow-xl  mx-auto">
        <p className="text-lg leading-relaxed">
          At <span className="font-semibold text-[#dc7977]">Toytopia</span>, we
          believe every child deserves a world filled with joy, creativity, and
          endless adventure. Our collection is curated to bring sparkles of
          happiness and learning to kids of all ages. Where imagination meets
          fun! Discover the magical world crafted specially for kids. From
          educational toys to pure fun, we focus on quality, safety, and
          delightful experiences.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 mx-auto">
        {[
          {
            icon: <FaPuzzlePiece size={50} />,
            title: "Creative Toys",
            desc: "Unlock imagination with puzzles, building sets, and more.",
          },
          {
            icon: <FaRocket size={50} />,
            title: "Adventure Fun",
            desc: "Toys that inspire thrilling adventures and big dreams.",
          },
          {
            icon: <FaGift size={50} />,
            title: "Perfect Gifts",
            desc: "Find the ideal toy for birthdays, holidays, and special moments.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white backdrop-blur-lg p-8 rounded-3xl text-center shadow-xl hover:scale-105 transition-transform"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-2xl font-bold text-[#dc7977] mb-2">
              {item.title}
            </h3>
            <p className="opacity-90 text-[#dc7977]">{item.desc}</p>
          </div>
        ))}
      </div>
      {/* Mission Section */}
      <div className="mt-16 bg-white backdrop-blur-md p-10 rounded-3xl shadow-xl mx-auto">
        <h2 className="text-2xl font-bold  mb-4 text-center">Our Mission</h2>
        <p className="text-lg leading-relaxed text-[#dc7977] text-center">
          Our mission is to build a joyful and imaginative world for kids by
          providing safe, high‑quality, and engaging toys that support learning
          and emotional growth.
        </p>
      </div>
    </MyContainer>
  );
}
