import React, { useState } from "react";
// import "./styles/complete.scss";
import "./styles/forms.scss";
import { useHistory } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineLock } from "react-icons/ai";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import countryList from "../../countryList.json";

const Complete = () => {
  const { push } = useHistory();
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!phone) {
      notifyPhone();
    } else if (!address) {
      notifyAddress();
    }
    // else if (!country) {
    //   notifyCountry();
    // }
    else {
      push("/verify");
    }
  };

  const notifyPhone = () => toast.error("A phone number is required");
  const notifyAddress = () => toast.error("The address is required");
  // const notifyCountry = () => toast.error("A country has not been selected");

  return (
    <div className="step">
      <div className="top-bar">
        <div onClick={() => push("/register")}>
          <IoIosArrowBack />
          <p>Volver</p>
        </div>
        <div>
          <p>Paso 02/03</p>
          <p>Localización</p>
        </div>
      </div>
      <div className="content">
        <form onSubmit={(event) => handleSubmit(event)}>
          <h1>Completa tu perfil</h1>
          <p>Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información</p>
          <div id="phone-input">
            <label htmlFor="phone">Número de teléfono</label>
            <PhoneInput className="input" value={phone} onChange={setPhone} />
          </div>
          <div className="input">
            <label htmlFor="address">Dirección</label>
            <input autoComplete="off" id="address" type="text" onChange={(event) => setAddress(event.target.value)} />
          </div>
          <div className="input">
            <label htmlFor="country">Pais de residencia</label>
            <select id="country" name="country" value={country} onChange={(event) => setCountry(event.target.value)}>
              {countryList.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <button className="submit" type="submit">
            Guardar y continuar
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

export default Complete;
