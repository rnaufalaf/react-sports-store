import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

import { addUser } from "../fetchs/userFetch";

const AddUserPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState({});
  const [phone, setPhone] = useState({});
  const [address, setAddress] = useState({});
  const [photoData, setPhotoData] = useState({});

  const handleItemUpload = (e) => {
    setPhotoData(e.target.files[0]);
  };

  const submitUser = (user) => {
    addUser(user);
    Swal.fire("User successfully added");
    navigate("/users");
  };

  const submitUserHandler = (photoName) => {
    const userObj = {
      username,
      phone,
      address,
      photo: Math.round(new Date() / 1000) + "--" + photoName,
    };
    submitUser(userObj);
  };

  const submitDataHandler = () => {
    const data = new FormData();

    data.append("image", photoData);
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
    submitUserHandler(photoData.name);
  };
  return (
    <div className="container py-4">
      <h4 align="center">Add User</h4>
      <form id="data">
        <div class="form-group py-3">
          <label for="username">Username</label>
          <input
            class="form-control"
            type="text"
            id="name"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div class="form-group py-3">
          <label for="phone">Phone</label>
          <input
            class="form-control"
            type="text"
            id="phone"
            placeholder="Enter Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div class="form-group py-3">
          <label for="name">Address</label>
          <input
            class="form-control"
            type="text"
            id="address"
            placeholder="Enter Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div class="form-group py-3">
          <label for="logo">Upload Photo</label>
          <input
            class="form-control"
            type="file"
            name="photo"
            accept="image/png, image/gif, image/jpeg"
            onChange={handleItemUpload}
          />
        </div>
        <div align="center">
          <button
            type="button"
            class="btn btn-primary my-5"
            form="data"
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

export default AddUserPage;
