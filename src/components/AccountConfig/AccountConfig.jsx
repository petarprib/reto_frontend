import React, { useState, useEffect } from "react";
import "./styles/accountconfig.scss";
import { useLocation } from "react-router-dom";
import JoinUs from "./JoinUs";
import Register from "./Register";
import Complete from "./Complete";
import Verify from "./Verify";

const AccountConfig = () => {
  const pathname = useLocation().pathname;
  const [rendered, setRendered] = useState();

  useEffect(() => {
    pathname === "/" && setRendered(<JoinUs />);
    pathname === "/register" && setRendered(<Register />);
    pathname === "/complete" && setRendered(<Complete />);
    pathname === "/verify" && setRendered(<Verify />);
  }, [pathname]);

  return (
    <div id="accountconfig">
      <div id="background">
        <img src={"img/Background.png"} alt="Background" />
      </div>
      {rendered}
    </div>
  );
};

export default AccountConfig;
