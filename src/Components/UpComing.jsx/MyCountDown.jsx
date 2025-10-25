import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import MyContainer from "../../MyContainer/MyContainer";

const MyCountDown = () => {
  const targetTime = new Date().getTime() + 24 * 60 * 60 * 1000;
  return (
    <div className="py-5 mx-auto md:flex hidden  ">
      <div className="w-full mx-auto px-2 sm:px-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <FlipClockCountdown
          to={targetTime}
          size={10}
          labels={{
            days: "Days",
            hours: "Hrs",
            minutes: "Min",
            seconds: "Sec",
          }}
          style={{
            borderRadius: "10px",
            color: "#fff",
            padding: "5px",
            width: "100%",
          }}
          digitBlockStyle={{
            backgroundColor: "#ff1e3c",
            borderRadius: "5px",
          }}
          separatorStyle={{
            color: "#fff",
            margin: "0 2px",
          }}
        />
      </div>
    </div>
  );
};

export default MyCountDown;
