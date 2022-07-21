import React, { useContext, useState } from "react";
import { GlobalContext } from "../../reducer/globalContext";
import "./ProductCard.css";

const ProductCard = ({curElement}) => {
    const { addDetail,cardDetail } = useContext(GlobalContext);
    const clickHandler = () => {
    addDetail(curElement);
    };
 
        return(
            
      <div className={`productCard  ${cardDetail?.email===curElement?.email&&'active'}`} role="button" onClick ={clickHandler }>
        <p>{curElement.gender} - {curElement.nat}</p>
        <h1>
          {curElement.name.title} { curElement.name.first } {curElement.name.last }
        </h1>
        <p>{curElement.email}</p>
      </div>
        );
};

export default ProductCard;
