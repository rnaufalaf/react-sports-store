import React from "react";

const BrandCard = (props) => {
  const { brandIcon, brandName } = props.data;
  return (
    <div class="card">
      <img class="card-img-top" src={brandIcon} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{brandName}</h5>
        <div class="row">
          <div class="col">
            <a class="btn btn-primary" href="/brands/edit">
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

export default BrandCard;
