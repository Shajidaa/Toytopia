import React from "react";

const OfferBanner = () => {
  return (
    <div>
      <h1>Special Deals on Your Kids’ Favorite Toys 🎁</h1>
      <p>“Hurry! Offer ends in</p>
      <div className="flex gap-5">
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": 10 }} aria-live="polite">
              10
            </span>
          </span>
          hours
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": 24 }} aria-live="polite">
              24
            </span>
          </span>
          min
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": 59 }} aria-live="polite">
              59
            </span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
