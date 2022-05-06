import React from "react";
import { useNavigate } from "react-router-dom";

const EditItemPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-4">
      <h4 align="center">Edit Item</h4>
      <form>
        <div class="form-group py-2">
          <label for="name">Item Name</label>
          <input
            class="form-control"
            type="text"
            id="name"
            placeholder="Enter Item Name"
          />
        </div>
        <div class="form-group py-2">
          <label for="type">Item Type</label>
          <input
            class="form-control"
            type="text"
            name="type"
            placeholder="Enter Item Type"
          />
        </div>
        <div class="form-group py-2">
          <label for="img">Upload Image</label>
          <input
            class="form-control"
            type="file"
            name="img"
            accept="image/png, image/gif, image/jpeg"
          />
        </div>
        <div class="form-group py-2">
          <label for="img">Choose Brand</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select Brand</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="form-group py-2">
          <label for="img">Choose User</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select User</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div align="center">
          <button
            type="submit"
            class="btn btn-primary my-5"
            onClick={() => navigate("/")}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditItemPage;
