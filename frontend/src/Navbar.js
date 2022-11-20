import React, { useState } from "react";
import { CircleFlag } from "react-circle-flags";
const Navbar = () => {
  return (
    <div className="top-nav">
      <div className="logo">MacroEconomics</div>
      <div className="heading">Dashboard</div>
      <div className="countries">
        <CircleFlag countryCode="us" height={70} />
        <CircleFlag countryCode="in" height={70} />
        <CircleFlag countryCode="cn" height={70} />
      </div>
    </div>
  );
};

export default Navbar;
