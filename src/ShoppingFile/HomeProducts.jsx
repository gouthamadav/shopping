import React, { useEffect, useState } from "react";
import "./homeproducts.css";
import { Link } from "react-router-dom";

function HomeProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      let res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error("Failed to fetch products");
      let data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="head">
        <div>
          <div className="products">
            <center>
              <span>
                <h1 className="product">Products</h1>
              </span>
            </center>
          </div>

          <div className="grid-container">
            {products.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id}>
                <div className="grid-item">
                  <img src={product.image} alt="" className="img" />
                  <p>{product.title}</p>
                  <p>{product.category}</p>
                  <p>{product.id}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;
