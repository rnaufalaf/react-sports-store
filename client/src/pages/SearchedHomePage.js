import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ItemCard from "../components/ItemCard";
import { getItems } from "../fetchs/itemFetch";

const SearchedHomePage = () => {
  const navigate = useNavigate();
  const { query } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems((res) => setItems(res));
  }, []);

  return (
    <div className="container my-4 mx-4">
      <div className="row">
        {items
          .filter((item) => item.itemObj.name.toLowerCase().includes(query))
          .map((item) => {
            return <ItemCard data={item} />;
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

export default SearchedHomePage;
