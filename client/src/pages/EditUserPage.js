import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

import { getUser, updateUser } from "../fetchs/userFetch";

const EditUserPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [photoData, setPhotoData] = useState({});

  const handleItemUpload = (e) => {
    setPhotoData(e.target.files[0]);
  };

  const update = (obj) => {
    updateUser(id, obj);
    Swal.fire("User successfully updated");
    navigate("/users");
  };

  const updateUserHandler = (photoName) => {
    const userObj = {
      username,
      phone,
      address,
      photo: Math.round(new Date() / 1000) + "--" + photoName,
    };
    update(userObj);
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
    updateUserHandler(photoData.name);
  };

  useEffect(() => {
    getUser(id, (res) => setUser(res));
  }, []);

  return (
    <div className="container py-4">
      <h4 align="center">Edit User</h4>
      <form>
        <div class="form-group py-3">
          <label for="name">Username</label>
          <input
            class="form-control"
            type="text"
            id="name"
            defaultValue={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div class="form-group py-3">
          <label for="name">Phone</label>
          <input
            class="form-control"
            type="text"
            id="phone"
            defaultValue={user.phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div class="form-group py-3">
          <label for="name">Address</label>
          <input
            class="form-control"
            type="text"
            id="address"
            defaultValue={user.address}
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
            onClick={() => {
              submitDataHandler();
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserPage;
