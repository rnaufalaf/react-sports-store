import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { deleteItem } from "../fetchs/itemFetch";

const ItemCard = (props) => {
  const { brandObj, itemObj, userObj } = props.data;
  const navigate = useNavigate();

  const deleteItemHandler = (id) => {
    deleteItem(id);
    Swal.fire("Item successfully deleted");
    navigate("/");
  };

  return (
    <div class="card my-2 mx-1 shadow">
      <div class="row">
        <div class="col">
          <img
            src={require(`../images/${userObj.photo}`)}
            alt="Card image cap"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginLeft: 10,
              marginTop: 5,
            }}
          />
        </div>
        <div class="col">
          <h6 style={{ paddingTop: 15, position: "absolute", left: 70 }}>
            {userObj.username}
          </h6>
        </div>
      </div>
      <hr class="my-1" />
      <img
        class="card-img-top"
        src={require(`../images/${itemObj.img}`)}
        alt="Card image cap"
      />
      <hr class="my-2" />

      <div class="card-body">
        <div class="row">
          <div class="col-sm-4">
            <div class="rounded-circle" style={{ width: "60%" }}>
              <img
                class="card-img-top"
                src={require(`../images/${brandObj.logo}`)}
                alt="Card image cap"
              />
            </div>
          </div>
          <div class="col-sm-4">
            <h6 style={{ paddingTop: 5, position: "absolute", left: 70 }}>
              {brandObj.name}
            </h6>
          </div>
        </div>
        <hr class="my-2" />
        <div class="row">
          <div class="col">
            <h5 class="card-title">{itemObj.name}</h5>
          </div>
          <div class="col">
            <h5 class="card-title" style={{ color: "gold" }}>
              {"$" + itemObj.price}
            </h5>
          </div>
        </div>
        <h6 class="card-subtitle">{itemObj.type}</h6>
        <p class="card-text">{itemObj.description}</p>

        <div class="dropdown" align="center">
          <button
            class="btn btn-secondary dropdown-toggle bg-warning"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{ color: "black", fontWeight: "bold", border: 0 }}
          >
            Actions
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              class="dropdown-item"
              onClick={() => navigate(`/items/edit/${itemObj.id}`)}
            >
              Edit
            </a>
            <a
              class="dropdown-item"
              onClick={() => deleteItemHandler(itemObj.id)}
            >
              Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
