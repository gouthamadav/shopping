import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok) throw new Error("Failed to fetch product details");
      let data = await res.json();
      setItem(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!item) {
    return (
      <div>
        <h1>Error loading product details</h1>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div>
          <img src={item.image} alt={item.title} />
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <p>Category: {item.category}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
