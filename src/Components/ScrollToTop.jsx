import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 
            w-14 h-14 rounded-full 
            bg-white border border-white
            backdrop-blur-md
            flex items-center justify-center 
            shadow-lg 
            hover:bg-white transition
          "
        >
          <ArrowUp size={28} className="text-[#e57368]" />
        </button>
      )}
    </>
  );
}
