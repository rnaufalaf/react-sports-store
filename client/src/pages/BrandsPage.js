import React from "react";
import { useNavigate } from "react-router-dom";

import BrandCard from "../components/BrandCard";

const BrandsPage = () => {
  const navigate = useNavigate();
  const dummyObj = [
    {
      id: 1,
      brandName: "Converse",
      brandIcon:
        "https://thumbs.dreamstime.com/z/vector-logos-collection-most-famous-fashion-brands-world-format-available-illustrator-ai-converse-chuck-taylor-all-star-131102324.jpg",
    },
    {
      id: 2,
      brandName: "Vans",
      brandIcon:
        "https://thumbs.dreamstime.com/z/vector-logos-collection-most-famous-fashion-brands-world-format-available-illustrator-ai-converse-chuck-taylor-all-star-131102324.jpg",
    },
    {
      id: 3,
      brandName: "Reebok",
      brandIcon:
        "https://thumbs.dreamstime.com/z/vector-logos-collection-most-famous-fashion-brands-world-format-available-illustrator-ai-converse-chuck-taylor-all-star-131102324.jpg",
    },
    {
      id: 4,
      brandName: "Skechers",
      brandIcon:
        "https://thumbs.dreamstime.com/z/vector-logos-collection-most-famous-fashion-brands-world-format-available-illustrator-ai-converse-chuck-taylor-all-star-131102324.jpg",
    },
  ];
  return (
    <div className="container px-4 py-4">
      <div className="row">
        {dummyObj.map((obj) => {
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
          style={{ borderRadius: "50px" }}
          onClick={() => navigate("/brands/add")}
        >
          + Add Brand
        </button>
      </div>
    </div>
  );
};

export default BrandsPage;
