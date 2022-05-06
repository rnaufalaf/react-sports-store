import React from "react";
import { useNavigate } from "react-router-dom";

const AddUserPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-4">
      <h4 align="center">Add User</h4>
      <form>
        <div class="form-group py-3">
          <label for="name">Username</label>
          <input
            class="form-control"
            type="text"
            id="name"
            placeholder="Enter Username"
          />
        </div>
        <div class="form-group py-3">
          <label for="name">Phone</label>
          <input
            class="form-control"
            type="text"
            id="phone"
            placeholder="Enter Phone Number"
          />
        </div>
        <div class="form-group py-3">
          <label for="name">Address</label>
          <input
            class="form-control"
            type="text"
            id="address"
            placeholder="Enter Address"
          />
        </div>
        <div class="form-group py-3">
          <label for="logo">Upload Photo</label>
          <input
            class="form-control"
            type="file"
            name="photo"
            accept="image/png, image/gif, image/jpeg"
          />
        </div>
        <div align="center">
          <button
            type="submit"
            class="btn btn-primary my-5"
            onClick={() => navigate("/users")}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserPage;
