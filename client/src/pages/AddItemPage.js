import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { getBrands } from "../fetchs/brandFetch";
import { getUsers } from "../fetchs/userFetch";
import { addItem } from "../fetchs/itemFetch";

const AddItemPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imgData, setImgData] = useState({});
  const [BrandId, setBrandId] = useState(0);
  const [UserId, setUserId] = useState(0);

  const [brands, setBrands] = useState([]);
  const [users, setUsers] = useState([]);

  const handleItemUpload = (e) => {
    setImgData(e.target.files[0]);
  };

  const submitItem = (item) => {
    addItem(item);
    Swal.fire("Item successfully added");
    navigate("/");
  };

  const submitItemHandler = (imgName) => {
    const itemObj = {
      name,
      type,
      img: Math.round(new Date() / 1000) + "--" + imgName,
      price,
      description,
      BrandId,
      UserId,
    };
    submitItem(itemObj);
  };

  const submitDataHandler = () => {
    const data = new FormData();

    data.append("image", imgData);
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
    submitItemHandler(imgData.name);
  };

  useEffect(() => {
    getBrands((res) => setBrands(res));
    getUsers((res) => setUsers(res));
  }, []);

  return (
    <div className="container py-4">
      <h4 align="center">Add Item</h4>
      <form>
        <div class="form-group py-2">
          <label for="name">Item Name</label>
          <input
            class="form-control"
            type="text"
            id="name"
            placeholder="Enter Item Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group py-2">
          <label for="type">Item Type</label>
          <input
            class="form-control"
            type="text"
            name="type"
            placeholder="Enter Item Type"
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div class="form-group py-2">
          <label for="price">Item Price</label>
          <input
            class="form-control"
            type="text"
            name="price"
            placeholder="Enter Item Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div class="form-group py-2">
          <label for="description">Description</label>
          <input
            class="form-control"
            type="textarea"
            name="description"
            placeholder="Enter Short Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div class="form-group py-2">
          <label for="img">Upload Image</label>
          <input
            class="form-control"
            type="file"
            name="img"
            accept="image/png, image/gif, image/jpeg"
            onChange={handleItemUpload}
          />
        </div>
        <div class="form-group py-2">
          <label for="BrandId">Choose Brand</label>
          <select
            name="BrandId"
            id="BrandId"
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => setBrandId(e.target.value)}
          >
            <option>Choose Brand</option>
            {brands.map((brand) => {
              return <option value={brand.id}>{brand.name}</option>;
            })}
          </select>
        </div>
        <div class="form-group py-2">
          <label for="UserId">Choose User</label>
          <select
            name="UserId"
            id="UserId"
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => setUserId(e.target.value)}
          >
            <option>Choose User</option>
            {users.map((user) => {
              return <option value={user.id}>{user.username}</option>;
            })}
          </select>
        </div>
        <div align="center">
          <button
            type="button"
            class="btn btn-primary my-5"
            style={{
              color: "black",
              backgroundColor: "gold",
              border: 0,
              fontWeight: "bold",
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

export default AddItemPage;
