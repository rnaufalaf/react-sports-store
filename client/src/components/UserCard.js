import React from "react";

const UserCard = (props) => {
  const { username, phone, address, photo } = props.data;
  return (
    <div class="card">
      <img class="card-img-top" src={photo} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{username}</h5>
        <h6 class="card-subtitle">{phone}</h6>
        <p class="card-text">{address}</p>
        <div class="row">
          <div class="col">
            <a class="btn btn-primary" href="/users/edit">
              Edit
            </a>
          </div>
          <div class="col">
            <a class="btn btn-danger">Delete</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
