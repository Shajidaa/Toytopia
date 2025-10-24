import { Link } from "react-router";
import MyContainer from "../MyContainer/MyContainer";

const Footer = () => {
  return (
    <footer className="px-4  w-full gradientBg">
      <MyContainer
        className="container flex
       flex-col justify-between py-10 mx-auto space-y-8 
       lg:flex-row lg:space-y-0"
      >
        <div className="lg:w-1/4">
          <h1 className="self-center text-2xl font-semibold">ToyTopia</h1>

          <p className="text-sm text-[#333333]  ">
            Bringing joy and imagination to kids with fun, safe, and creative
            toys for all ages.
          </p>
        </div>
        <hr className="lg:hidden" />
        <div className="grid grid-cols-2  text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase">Product</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Features
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Integrations
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase ">Company</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase ">Developers</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Public API
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Documentation
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Guides
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase ">Social media</div>
            <div className="flex flex-col justify-start space-x-3">
              <a
                className="hover:underline"
                href="https://www.facebook.com/profile.php?id=61564677698432"
                target="blank"
              >
                Facebook
              </a>
              <a
                className="hover:underline"
                href="https://linkedin.com/in/shajida-islam-42660b325"
                target="blank"
              >
                Linkedin
              </a>
              <a
                className="hover:underline"
                href="https://github.com/Shajidaa"
                target="blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <hr />
      </MyContainer>
      <hr className="hidden lg:flex" />
      <div className="py-6 text-sm text-center ">
        © 2025 Company Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
