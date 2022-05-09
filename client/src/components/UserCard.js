import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { deleteUser } from "../fetchs/userFetch";

const UserCard = (props) => {
  const navigate = useNavigate();

  const deleteUserHandler = (id) => {
    deleteUser(id);
    Swal.fire("User successfully deleted");
    navigate("/users");
  };

  const { id, username, phone, address, photo } = props.data;
  console.log(photo);
  return (
    <div class="card mx-1 my-2 shadow">
      <img
        class="card-img-top"
        src={require(`../images/${photo}`)}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{username}</h5>
        <h6 class="card-subtitle">{phone}</h6>
        <p class="card-text">{address}</p>
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
              onClick={() => navigate(`/users/edit/${id}`)}
            >
              Edit
            </a>
            <a class="dropdown-item" onClick={() => deleteUserHandler(id)}>
              Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
