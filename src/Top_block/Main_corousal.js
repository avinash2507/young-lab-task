import React, { useContext } from "react";
import { GlobalContext } from "../reducer/globalContext";
import "./Main_corousal.css";

const Main_corousal = () => {
  const { cardDetail } = useContext(GlobalContext);
  return (
    <div className="top_view_container">
      <div className="element_container">
        <div className="image">
          <img
            src={
              cardDetail?.picture?.large || "https://joeschmoe.io/api/v1/random"
            }
            alt="person image"
          />
        </div>
        <div className="Person_details">
          <h1 className="cardHeading">
            {cardDetail?.name?.title || "Mr "}&nbsp;
            {cardDetail?.name?.first || "First "}&nbsp;
            {cardDetail?.name?.last || "lastname "}
          </h1>
          <p className="cardAddress">
            <span className="flatNo">
              {cardDetail?.location?.street?.number || "678"}
            </span>&nbsp;
            {cardDetail?.location?.street?.name || " streetname "}&nbsp;
            {cardDetail?.location?.city || "cityname "}&nbsp;
            {cardDetail?.location?.state || "statename "}&nbsp;
            <span className="city">
                &nbsp;
              {cardDetail?.location?.country || "Country "}{" "}
              
            </span>{" "}
            {cardDetail?.location?.postcode || "postcode "}{" "}
            &nbsp;
            <br /> {cardDetail?.location?.timezone?.offset || "offset "}{" "}
            {cardDetail?.location?.state || "state "}{" "}
            {cardDetail?.location?.country || "countryname "} {" "}
          </p>
          <p className="gender"> {cardDetail.gender || "gendername "}</p>
        </div>
      </div>
    </div>
  );
};

export default Main_corousal;
