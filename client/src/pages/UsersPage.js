import React from "react";
import { useNavigate } from "react-router-dom";

import UserCard from "../components/UserCard";

const UsersPage = () => {
  const navigate = useNavigate();
  const dummyObj = [
    {
      id: 1,
      username: "John",
      phone: "12345",
      address: "London",
      photo: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      id: 2,
      username: "John",
      phone: "12345",
      address: "London",
      photo: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      id: 3,
      username: "John",
      phone: "12345",
      address: "London",
      photo: "https://www.w3schools.com/howto/img_avatar.png",
    },
  ];
  return (
    <div className="container px-4 py-4">
      <div className="row">
        {dummyObj.map((obj) => {
          return (
            <div className="col-sm-4">
              <UserCard data={obj} />
            </div>
          );
        })}
      </div>
      <div align="right" class="py-3">
        <button
          class="btn btn-md btn-primary"
          style={{ borderRadius: "50px" }}
          onClick={() => navigate("/users/add")}
        >
          + Add User
        </button>
      </div>
    </div>
  );
};

export default UsersPage;
