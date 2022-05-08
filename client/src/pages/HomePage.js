import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ItemCard from "../components/ItemCard";
import { getItems } from "../fetchs/itemFetch";

const HomePage = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = () => {
      getItems((items) => {
        setItems(items);
      });
      setIsLoading(false);
    };
    fetchItems();
  }, [setItems, setIsLoading]);

  return (
    <div className="container my-4 mx-4">
      <div className="row">
        {items.map((item) => {
          return <ItemCard data={item}></ItemCard>;
        })}
      </div>
      <div className="py-3" align="right">
        <button
          class="btn btn-md btn-primary"
          style={{ borderRadius: "50px" }}
          onClick={() => navigate("/items/add")}
        >
          + Add Item
        </button>
      </div>
    </div>
  );
};

export default HomePage;
