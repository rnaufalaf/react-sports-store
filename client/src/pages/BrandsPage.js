import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getBrands } from "../fetchs/brandFetch";

import BrandCard from "../components/BrandCard";

const BrandsPage = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = () => {
      getBrands((brands) => {
        setBrands(brands);
      });
      setIsLoading(false);
    };
    fetchBrands();
  }, [setBrands, setIsLoading]);

  return (
    <div className="container px-4 py-4">
      <h3 align="center" class="py-4" style={{ fontWeight: "bold" }}>
        List of Brands
      </h3>
      <div className="row">
        {brands.map((obj) => {
          return (
            <div className="col-sm-4">
              <BrandCard data={obj} />
            </div>
          );
        })}
      </div>
      <div align="right" class="py-3">
        <button
          class="btn btn-md btn-primary"
          style={{
            borderRadius: "50px",
            backgroundColor: "gold",
            color: "black",
            border: 0,
            fontWeight: "bold",
          }}
          onClick={() => navigate("/brands/add")}
        >
          + Add Brand
        </button>
      </div>
    </div>
  );
};

export default BrandsPage;
