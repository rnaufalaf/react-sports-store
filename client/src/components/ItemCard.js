import React from "react";

const ItemCard = (props) => {
  console.log(props);
  const { img, brandIcon, brandName, name, desc } = props.data;
  return (
    <div class="card">
      <img class="card-img-top" src={img} alt="Card image cap" />
      <div class="card-body">
        <div class="row">
          <div class="col-sm-4">
            <div class="rounded-circle" style={{ width: "60%" }}>
              <img class="card-img-top" src={brandIcon} alt="Card image cap" />
            </div>
          </div>
          <div class="col-sm-4">
            <h6 style={{ marginRight: 1 }}>{brandName}</h6>
          </div>
        </div>
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{desc}</p>
        <div class="row">
          <div class="col">
            <a class="btn btn-primary" href="/items/edit">
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

export default ItemCard;
