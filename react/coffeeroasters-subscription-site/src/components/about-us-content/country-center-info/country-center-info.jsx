import React from "react";
import { SCountryCenterInfo } from "./country-center-info.style";

const centerCountryData = [
  {
    countryImg: "/assets/about/desktop/illustration-uk.svg",
    countryName: "United Kingdom",
    contactAdressStreet: "68 Asfordby Rd",
    contactAdressCity: "Alcaston",
    contactAdress3: "SY6 1YA",
    contactNumber: "+44 1241 918425",
  },
  {
    countryImg: "/assets/about/desktop/illustration-canada.svg",
    countryName: "Canada",
    contactAdressStreet: "1528  Eglinton Avenue",
    contactAdressCity: "Toronto",
    contactAdress3: "Ontario M4P 1A6",
    contactNumber: "+1 416 485 2997",
  },
  {
    countryImg: "/assets/about/desktop/illustration-australia.svg",
    countryName: "Australia",
    contactAdressStreet: "36 Swanston Street",
    contactAdressCity: "Kewell",
    contactAdress3: "Victoria",
    contactNumber: "+61 4 9928 3629",
  },
];

function CountryCenterInfo(props) {
  return (
    <SCountryCenterInfo>
      <h2 className="country-center-info-title">Our headquarters</h2>

      <div className="center-info-boxes">
        {centerCountryData.map(function (props, i) {
          return (
            <div className="country-center-info-box" key={props.countryName}>
              <img
                src={props.countryImg}
                alt=""
                className="country-center-info-box-img"
              />
              <h2 className="country-center-info-box-title">
                {props.countryName}
              </h2>
              <div className="country-center-info-box-description">
                <span className="center-adress-description">
                  {props.contactAdressStreet}
                </span>
                <span className="center-adress-description">
                  {props.contactAdressCity}
                </span>
                <span className="center-adress-description">
                  {props.contactAdress3}
                </span>
                <span className="center-adress-description">
                  {props.contactNumber}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </SCountryCenterInfo>
  );
}

export default CountryCenterInfo;
