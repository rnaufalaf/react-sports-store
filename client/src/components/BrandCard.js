import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { deleteBrand } from "../fetchs/brandFetch";

const BrandCard = (props) => {
  const { id, name, logo, description } = props.data;
  const navigate = useNavigate();

  const deleteBrandHandler = (id) => {
    deleteBrand(id);
    Swal.fire("Brand successfully deleted");
    navigate("/brands");
  };

  return (
    <div class="card shadow mx-2 my-1">
      <img
        class="card-img-top"
        src={require(`../images/${logo}`)}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <hr class="my-2" />
        <p class="card-text">{description}</p>
        <div class="dropdown" align="center">
          <button
            class="btn btn-secondary dropdown-toggle bg-warning"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{
              color: "black",
              fontWeight: "bold",
              border: 0,
            }}
          >
            Actions
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              class="dropdown-item"
              onClick={() => navigate(`/brands/edit/${id}`)}
            >
              Edit
            </a>
            <a class="dropdown-item" onClick={() => deleteBrandHandler(id)}>
              Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
