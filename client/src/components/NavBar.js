import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchChanged = (e) => {
    setSearchQuery(e.target.value);
  };
  const navigate = useNavigate();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient ">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="/"
          style={{ color: "gold", fontWeight: "bold" }}
        >
          Items
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link"
                href="/users"
                style={{ color: "gold", fontWeight: "bold" }}
              >
                Users
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/brands"
                style={{ color: "gold", fontWeight: "bold" }}
              >
                Brands
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={searchChanged}
            />
            <button
              type="button"
              class="btn btn-primary"
              style={{
                fontWeight: "bold",
                backgroundColor: "gold",
                color: "black",
                border: 0,
              }}
              onClick={() => navigate(`/searchQuery/${searchQuery}`)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
