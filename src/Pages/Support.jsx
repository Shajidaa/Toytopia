import React from "react";
import MyContainer from "../MyContainer/MyContainer";
import {
  FaEnvelope,
  FaHeadset,
  FaPhone,
  FaQuestionCircle,
} from "react-icons/fa";

const Support = () => {
  return (
    <MyContainer className="min-h-screen p-10 text-[#dc7977]">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Support</h1>
        <p className="text-lg mt-2 max-w-xl mx-auto">
          We're here to help! If you have any questions, concerns, or need
          assistance, feel free to reach out to us anytime.
        </p>
      </div>

      {/* Contact Options */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-xl text-center">
          <FaEnvelope size={50} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Email Us</h3>
          <p>support@toytopia.com</p>
        </div>

        <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-xl text-center">
          <FaPhone size={50} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Call Us</h3>
          <p>+1 800 555 1234</p>
        </div>

        <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-xl text-center">
          <FaHeadset size={50} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Live Support</h3>
          <p>Chat with our team for instant help.</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "How long does shipping take?",
              a: "Shipping usually takes 3–5 business days depending on your location.",
            },
            {
              q: "Can I return a product?",
              a: "Yes! We offer a 7‑day return policy for unused products in original packaging.",
            },
            {
              q: "Do you offer gift wrapping?",
              a: "Yes, gift wrapping is available at checkout for selected items.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-3 text-xl font-semibold mb-2">
                <FaQuestionCircle /> {item.q}
              </div>
              <p className="text-md opacity-90">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </MyContainer>
  );
};

export default Support;
