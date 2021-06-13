import React, { useState } from "react";
// import "./styles/verify.scss";
import "./styles/forms.scss";
import { useHistory } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineLock } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Verify = () => {
  const { push } = useHistory();
  const [number, setNumber] = useState("");
  const [key, setKey] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!number) {
      notifyNumber();
    } else if (!key) {
      notifyKey();
    } else {
      notifySuccess();
    }
  };

  const notifyNumber = () => toast.error("The card number is required");
  const notifyKey = () => toast.error("The secret key is required");
  const notifySuccess = () => toast.success("You have registered successfully");

  return (
    <div className="step">
      <div className="top-bar">
        <div onClick={() => push("/complete")}>
          <IoIosArrowBack />
          <p>Volver</p>
        </div>
        <div>
          <p>Paso 03/03</p>
          <p>Verificación por tarjeta</p>
        </div>
      </div>
      <div className="content">
        <form onSubmit={(event) => handleSubmit(event)}>
          <h1>Verifica tu perfil</h1>
          <p>Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información</p>
          <div className="input">
            <label htmlFor="number">Número de tarjeta</label>
            <input autoComplete="off" id="number" type="text" onChange={(event) => setNumber(event.target.value)} />
          </div>
          <div className="input">
            <label htmlFor="key">Código secreto</label>
            <input autoComplete="off" id="key" type="text" onChange={(event) => setKey(event.target.value)} />
          </div>
          <button className="submit" type="submit">
            Crear cuenta
          </button>
          <div className="informacion-segura">
            <AiOutlineLock />
            <p>Tu información es segura</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verify;
