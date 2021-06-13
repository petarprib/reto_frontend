import React, { useState } from "react";
// import "./styles/register.scss";
import "./styles/forms.scss";
import { useHistory } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { push } = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !name.includes(" ")) {
      notifyName();
    } else if (!email) {
      notifyEmail();
    } else if (!password) {
      notifyPassword();
    } else if (!check) {
      notifyCheck();
    } else {
      push("/complete");
    }
  };

  const notifyName = () => toast.error("The full name is required");
  const notifyEmail = () => toast.error("The email is invalid");
  const notifyPassword = () =>
    toast.error(
      "The password must contain at least 8 characters of which at least 1 letter, 1 number and 1 special character"
    );
  const notifyCheck = () => toast.error("You must agree to the terms and conditions");

  return (
    <div className="step">
      <div className="top-bar">
        <div onClick={() => push("/")}>
          <IoIosArrowBack />
          <p>Volver</p>
        </div>
        <div>
          <p>Paso 01/03</p>
          <p>Información personal</p>
        </div>
      </div>
      <div className="content">
        <form onSubmit={(event) => handleSubmit(event)}>
          <h1>Registra tu cuenta individual</h1>
          <p>Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información</p>
          <div className="input">
            <label htmlFor="name">Nombre completo*</label>
            <input autoComplete="off" id="name" type="text" onChange={(event) => setName(event.target.value)} />
          </div>
          <div className="input">
            <label htmlFor="email">Correo electronico*</label>
            <input autoComplete="off" id="email" type="text" onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="input">
            <label htmlFor="password">Contraseña*</label>
            <input
              autoComplete="off"
              id="password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="checkbox-wrap">
            <input autoComplete="off" id="checkbox" type="checkbox" onClick={() => setCheck(!check)} />
            <label htmlFor="checkbox">Acepto los términos y condiciones</label>
          </div>
          <button className="submit" type="submit">
            Registrar cuenta
          </button>
          <button className="google-button">
            <FcGoogle /> Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
