import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

import { getBrand, updateBrand } from "../fetchs/brandFetch";

const EditBrandPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [brand, setBrand] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [logoData, setLogoData] = useState({});

  const handleItemUpload = (e) => {
    setLogoData(e.target.files[0]);
  };

  const update = (obj) => {
    updateBrand(id, obj);
    Swal.fire("Brand successfully updated");
    navigate("/brands");
  };

  const updateBrandHandler = (logoName) => {
    const brandObj = {
      name,
      description,
      logo: Math.round(new Date() / 1000) + "--" + logoName,
    };
    update(brandObj);
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
    updateBrandHandler(logoData.name);
  };

  useEffect(() => {
    getBrand(id, (res) => setBrand(res));
  }, []);

  return (
    <div className="container py-4">
      <h4 align="center">Edit Brand</h4>
      <form>
        <div class="form-group py-3">
          <label for="name">Brand Name</label>
          <input
            class="form-control"
            type="text"
            id="name"
            defaultValue={brand.name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group py-3">
          <label for="description">Brand Description</label>
          <input
            class="form-control"
            type="textarea"
            id="description"
            defaultValue={brand.description}
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

export default EditBrandPage;
