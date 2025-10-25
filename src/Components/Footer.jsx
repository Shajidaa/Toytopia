import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
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

          <p className="text-sm text-[#333333] mt-3.5">
            Bringing joy and imagination to kids with fun, safe, and creative
            toys for all ages.
          </p>
        </div>
        <hr className="lg:hidden" />
        <div className="grid grid-cols-2  text-sm gap-x-5 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-5">
            <h3 className="tracking-wide uppercase">Product</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer">Features</a>
              </li>
              <li>
                <a rel="noopener noreferrer">Integrations</a>
              </li>
              <li>
                <a rel="noopener noreferrer">Pricing</a>
              </li>
              <li>
                <a rel="noopener noreferrer">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h3 className="tracking-wide uppercase ">Services</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer">Design</a>
              </li>
              <li>
                <a rel="noopener noreferrer">Marketing</a>
              </li>
              <li>
                <a rel="noopener noreferrer">Advertisement</a>
              </li>
            </ul>
          </div>
          <div className="space-y-5 ">
            <h3 className="uppercase ">Legal</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="hover:underline cursor-pointer"
                  rel="noopener noreferrer"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline cursor-pointer"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline cursor-pointer"
                  rel="noopener noreferrer"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-5 ">
            <div className="uppercase ">Social media</div>
            <div className="flex flex-col justify-start space-x-3">
              <a
                className="hover:underline"
                href="https://www.facebook.com/profile.php?id=61564677698432"
                target="blank"
              >
                <FaFacebook className="inline" /> Facebook
              </a>
              <a
                className="hover:underline"
                href="https://linkedin.com/in/shajida-islam-42660b325"
                target="blank"
              >
                <FaLinkedin className="inline" /> Linkedin
              </a>
              <a
                className="hover:underline"
                href="https://github.com/Shajidaa"
                target="blank"
              >
                <FaGithub className="inline" /> GitHub
              </a>
            </div>
          </div>
        </div>
        <hr />
      </MyContainer>
      <hr className="hidden lg:flex" />
      <div className="md:py-3 py-0 md:pb-2 pb-15 text-sm text-center ">
        © All rights reserved by ToyTopia
      </div>
    </footer>
  );
};

export default Footer;
