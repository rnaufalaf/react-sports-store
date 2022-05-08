import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import UserCard from "../components/UserCard";
import { getUsers } from "../fetchs/userFetch";

const UsersPage = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = () => {
      getUsers((users) => {
        setUsers(users);
      });
      setIsLoading(false);
    };
    fetchUsers();
  }, [setUsers, setIsLoading]);

  return (
    <div className="container px-4 py-4">
      <div className="row">
        {users.map((obj) => {
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
