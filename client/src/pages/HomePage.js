import React from "react";
import { useNavigate } from "react-router-dom";

import ItemCard from "../components/ItemCard";

const HomePage = () => {
  const navigate = useNavigate();
  const dummyObj = [
    {
      id: 1,
      img: "https://cf.shopee.co.id/file/52dcc05ded24fb7d88dc589f0f9a6318",
      name: "Converse 70s HI",
      desc: "Converse Chuck Taylor All Star 70s Hi",
      brandName: "Converse",
      brandIcon:
        "https://thumbs.dreamstime.com/z/vector-logos-collection-most-famous-fashion-brands-world-format-available-illustrator-ai-converse-chuck-taylor-all-star-131102324.jpg",
    },
    {
      id: 2,
      img: "https://cf.shopee.co.id/file/52dcc05ded24fb7d88dc589f0f9a6318",
      name: "Vans 70s HI",
      desc: "Converse Chuck Taylor All Star 70s Hi",
      brandName: "Converse",
      brandIcon:
        "https://thumbs.dreamstime.com/z/vector-logos-collection-most-famous-fashion-brands-world-format-available-illustrator-ai-converse-chuck-taylor-all-star-131102324.jpg",
    },
    {
      id: 3,
      img: "https://cf.shopee.co.id/file/52dcc05ded24fb7d88dc589f0f9a6318",
      name: "Asics 70s HI",
      desc: "Converse Chuck Taylor All Star 70s Hi",
      brandName: "Converse",
      brandIcon:
        "https://thumbs.dreamstime.com/z/vector-logos-collection-most-famous-fashion-brands-world-format-available-illustrator-ai-converse-chuck-taylor-all-star-131102324.jpg",
    },
    {
      id: 4,
      img: "https://cf.shopee.co.id/file/52dcc05ded24fb7d88dc589f0f9a6318",
      name: "Skechers 70s HI",
      desc: "Converse Chuck Taylor All Star 70s Hi",
      brandName: "Converse",
      brandIcon:
        "https://thumbs.dreamstime.com/z/vector-logos-collection-most-famous-fashion-brands-world-format-available-illustrator-ai-converse-chuck-taylor-all-star-131102324.jpg",
    },
    {
      id: 5,
      img: "https://cf.shopee.co.id/file/52dcc05ded24fb7d88dc589f0f9a6318",
      name: "Reebok 70s HI",
      desc: "Converse Chuck Taylor All Star 70s Hi",
      brandName: "Converse",
      brandIcon:
        "https://thumbs.dreamstime.com/z/vector-logos-collection-most-famous-fashion-brands-world-format-available-illustrator-ai-converse-chuck-taylor-all-star-131102324.jpg",
    },
    {
      id: 6,
      img: "https://cf.shopee.co.id/file/52dcc05ded24fb7d88dc589f0f9a6318",
      name: "Nike 70s HI",
      desc: "Converse Chuck Taylor All Star 70s Hi",
      brandName: "Converse",
      brandIcon:
        "https://thumbs.dreamstime.com/z/vector-logos-collection-most-famous-fashion-brands-world-format-available-illustrator-ai-converse-chuck-taylor-all-star-131102324.jpg",
    },
  ];
  return (
    <div className="container my-4 mx-4">
      <div className="row">
        {dummyObj.map((obj) => {
          return (
            <div className="col-sm-4">
              <ItemCard data={obj} />
            </div>
          );
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
