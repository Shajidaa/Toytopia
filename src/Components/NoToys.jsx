import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const NoToys = () => {
  return (
    <div>
      <h1 className="text-center font-bold">
        No toys match your search. Try a different name
      </h1>
      <DotLottieReact
        src="https://lottie.host/7a75b80d-b5a3-4896-8f67-9e3c1eea7b67/UZH7r5KRZR.lottie"
        loop
        autoplay
        color="#e57368"
      />
    </div>
  );
};

export default NoToys;
