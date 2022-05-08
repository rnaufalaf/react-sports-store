import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  HomePage,
  SearchedHomePage,
  BrandsPage,
  UsersPage,
  AddBrandPage,
  EditBrandPage,
  AddItemPage,
  EditItemPage,
  AddUserPage,
  EditUserPage,
} from "../pages";

const MainContent = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/searchQuery/:query" element={<SearchedHomePage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/brands/add" element={<AddBrandPage />} />
        <Route path="/brands/edit/:id" element={<EditBrandPage />} />
        <Route path="/items/add" element={<AddItemPage />} />
        <Route path="/items/edit/:id" element={<EditItemPage />} />
        <Route path="/users/add" element={<AddUserPage />} />
        <Route path="/users/edit/:id" element={<EditUserPage />} />
      </Routes>
    </div>
  );
};

export default MainContent;
