import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";

import { datadogRum } from "@datadog/browser-rum";

const NewContact = (props) => {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [usState, setUsState] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");

  const [address, setAddress] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        mode: "no-cors",
        "Postman-Token": "f032b670-b8e0-409a-b817-37ae6cac1868",

        "Access-Control-Allow-Origin": "*",
        body: address
      }
    };

    fetch(`https://b49538551502.ngrok.io/api/contacts`).then((res) =>
      console.log(res)
    );
  }, [address]);

  const updateStreet = (event) => {
    return setStreet(event.target.value);
  };

  const updateCity = (event) => {
    return setCity(event.target.value);
  };

  const updateUsState = (event) => {
    return setUsState(event.target.value);
  };

  const updateCountry = (event) => {
    return setCountry(event.target.value);
  };

  const updateZip = (event) => {
    return setZip(event.target.value);
  };

  const submitUserAction = (event) => {
    event.preventDefault();
    let formValues = {
      street: street,
      city: city,
      usState: usState,
      country: country,
      zip: zip
    };

    setAddress(
      new FormData(
        Object.keys(formValues)
          .map((item) => `${item}=${address[item]}`)
          .join("&")
      )
    );

    // window.DD_LOGS && DD_LOGS.logger.log( "address content", address );
    // return window.DD_RUM && window.DD_RUM.addUserAction( "address", address );
  };

  return (
    <div className="contactFormContainer">
      <h3>Enter Address</h3>
      <form>
        <div className="input-section">
          <label>
            Street
            <input name="street" value={street} onChange={updateStreet} />
          </label>
        </div>
        <div className="input-section">
          <label>
            City
            <input name="city" value={city} onChange={updateCity} />
          </label>
        </div>
        <div className="input-section">
          <label>
            State
            <input name="usState" value={usState} onChange={updateUsState} />
          </label>
        </div>
        <div className="input-section">
          <label>
            Country
            <input name="country" value={country} onChange={updateCountry} />
          </label>
        </div>
        <div className="input-section">
          <label>
            Zip
            <input name="zip" value={zip} onChange={updateZip} />
          </label>
        </div>
        <div>
          <div>{street}</div>
          <div>
            {city}, {usState}, {country}
          </div>
          <div>{zip}</div>
        </div>

        <button onClick={submitUserAction}>Send address </button>
      </form>
    </div>
  );
};

export default withRouter(NewContact);
