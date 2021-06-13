import React, { useState, useEffect } from "react";
import "./styles/joinus.scss";
import { useHistory } from "react-router-dom";
import { BsPentagonFill } from "react-icons/bs";
import { BsPentagon } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { RiSuitcaseLine } from "react-icons/ri";

const Joinus = () => {
  const { push } = useHistory();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredDevelopers, setHoveredDevelopers] = useState(false);
  const [hoveredBusiness, setHoveredBusiness] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="joinus" style={{ minHeight: window.innerHeight }}>
      {windowWidth > 1024 && (
        <div id="joinus-bar">
          <p>
            Ya tienes cuenta? <span className="login-redirect">Inicia sesión</span>
          </p>
        </div>
      )}
      <div id="content-joinus">
        <div>
          <h1>¡Únete a la comunidad!</h1>
          <p>Para empezar, dinos que cuenta te gustaría abrir.</p>
          <div
            className={`account-types ${hoveredDevelopers && "hovered-type"}`}
            onMouseEnter={() => setHoveredDevelopers(true)}
            onMouseLeave={() => setHoveredDevelopers(false)}
            onClick={() => push("/register")}
          >
            <div className={`pentagon ${hoveredDevelopers && "hovered-pentagon"}`}>
              {hoveredDevelopers ? <BsPentagonFill /> : <BsPentagon />}
              <FiUser />
            </div>
            <div className="account-type">
              <p>Developers</p>
              <p>Cuenta personas para entrar en el mundo dev</p>
            </div>
            {windowWidth > 1024 && (
              <div className="arrow-right">
                <AiOutlineArrowRight />
              </div>
            )}
          </div>
          <div
            className={`account-types ${hoveredBusiness && "hovered-type"}`}
            onMouseEnter={() => setHoveredBusiness(true)}
            onMouseLeave={() => setHoveredBusiness(false)}
            onClick={() => push("/register")}
          >
            <div className={`pentagon ${hoveredBusiness && "hovered-pentagon"}`}>
              {hoveredBusiness ? <BsPentagonFill /> : <BsPentagon />}
              <RiSuitcaseLine />
            </div>
            <div className="account-type">
              <p>Business</p>
              <p>Tienes o perteneces a una compañía</p>
            </div>
            {windowWidth > 1024 && (
              <div className="arrow-right">
                <AiOutlineArrowRight />
              </div>
            )}
          </div>
          {windowWidth <= 1024 && (
            <div id="joinus-bar">
              <p>
                Ya tienes cuenta? <span className="login-redirect">Inicia sesión</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Joinus;
