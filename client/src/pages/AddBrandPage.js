import React from "react";
import { useNavigate } from "react-router-dom";

const AddBrandPage = () => {
  const navigate = useNavigate();
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
          />
        </div>
        <div class="form-group py-3">
          <label for="logo">Upload Image</label>
          <input
            class="form-control"
            type="file"
            name="logo"
            accept="image/png, image/gif, image/jpeg"
          />
        </div>
        <div align="center">
          <button
            type="submit"
            class="btn btn-primary my-5"
            onClick={() => navigate("/brands")}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBrandPage;
