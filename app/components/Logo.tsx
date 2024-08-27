import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-1 items-center p-2">
      <img src={"/VITLogoEmblem.png"} className="invert" alt="" />
      <span className="font-serif text-6xl font-bold">VIT</span>
    </div>
  );
};

export default Logo;
