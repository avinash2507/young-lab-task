import ProductCard from "../ProductCard/ProductCard";
import "./ProductLayout.css";
import { useEffect, useState } from "react";
const BASE_URL="https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020";

const ProductLayout = () => {
    const [users, setUsers] = useState([]);
    const [loader, setLaoder] = useState(false);

    const getUsers =async () => {
        setLaoder(true);
        const apiResponse = await  fetch(BASE_URL);
        const results = await apiResponse.json();
        const actualData = results.results;
        setUsers(actualData);
        setLaoder(false); 
    };
    useEffect(() => {getUsers();}, []);

  
  return (
    <div className="productContainer">
        {
            loader?<img src="./images/load.gif"className="loading"  alt="Loading" />:

      <div className="productLayoutContainer">
            {
            users.map((curElement) => <ProductCard curElement={curElement} />)
            }
      </div>
        }

    </div>

)}


export default ProductLayout;
