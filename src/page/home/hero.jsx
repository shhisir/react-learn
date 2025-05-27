
import React from "react";
import heroImage from "../../../src/assets/hero.png"
function Hero() {
  return (
    <div className="flex">
      <div>
        <div>Want anything to be easy with <span className="font-bold">LaslesVPN</span>.</div>
        <div>
          Provide a network for all your needs with ease and fun using LaslesVPN
          discover interesting fheatures from us.
        </div>

        <button>Get Started</button>
      </div>
      <img src={heroImage} alt="" />
    </div>
  );
}

export default Hero;
