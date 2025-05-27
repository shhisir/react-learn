
import React from "react";
import image from "/logo.png"




function Header(props) {


  return (
    <div className="flex justify-between items-center  mx-5 p-[6px] h-16">
      <div >
        <img src={image} alt="log" />
      </div>
      
      <ul className="flex gap-5">
        <li>About</li>
        <li>Features</li>
        <li>testinomia</li>
        <li>Pricing</li>
        <li>Testimonials</li>
        <li>Help</li>
      </ul>

      
      <div className="flex gap-5">

        <button className="bg-blue-600  py-1 px-2 rounded-[5px] text-white ">Login</button>
        <button>Sign up</button>
      </div>
    </div>
  );
}

export default Header;
