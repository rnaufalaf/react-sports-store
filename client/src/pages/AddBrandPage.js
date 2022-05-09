import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

import { addBrand } from "../fetchs/brandFetch";

const AddBrandPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState({});
  const [description, setDescription] = useState({});
  const [logoData, setLogoData] = useState({});

  const handleItemUpload = (e) => {
    setLogoData(e.target.files[0]);
  };

  const submitBrand = (brand) => {
    addBrand(brand);
    Swal.fire("Brand successfully added");
    navigate("/brands");
  };

  const submitBrandHandler = (logoName) => {
    const brandObj = {
      name,
      description,
      logo: Math.round(new Date() / 1000) + "--" + logoName,
    };
    submitBrand(brandObj);
  };

  const submitDataHandler = () => {
    const data = new FormData();

    data.append("image", logoData);
    axios({
      method: "POST",
      url: "http://localhost:3000/single",
      data: data,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    submitBrandHandler(logoData.name);
  };
  return (
    <div className="container py-4">
      <h4 align="center">Add Brand</h4>
      <form>
        <div class="form-group py-3">
          <label for="name">Brand Name</label>
          <input
            class="form-control"
            type="text"
            id="name"
            placeholder="Enter Brand Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group py-3">
          <label for="description">Brand Description</label>
          <input
            class="form-control"
            type="textarea"
            name="description"
            id="description"
            placeholder="Enter Short Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div class="form-group py-3">
          <label for="logo">Upload Image</label>
          <input
            class="form-control"
            type="file"
            name="logo"
            accept="image/png, image/gif, image/jpeg"
            onChange={handleItemUpload}
          />
        </div>
        <div align="center">
          <button
            type="button"
            class="btn btn-primary my-5"
            style={{
              backgroundColor: "gold",
              color: "black",
              fontWeight: "bold",
              border: 0,
            }}
            onClick={() => submitDataHandler()}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBrandPage;
