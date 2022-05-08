import axios from "axios";

const url = "http://localhost:3000";

const getItems = (callback) => {
  axios({
    method: "GET",
    url: `${url}/items`,
  })
    .then((items) => {
      callback(items.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getItem = (id, callback) => {
  axios({
    method: "GET",
    url: `${url}/items/${id}`,
  })
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addItem = (obj) => {
  console.log(obj);
  const { name, type, img, price, description, BrandId, UserId } = obj;
  axios({
    method: "POST",
    url: `${url}/items/create`,
    data: {
      name: name,
      type: type,
      img: img,
      price: price,
      description: description,
      BrandId: BrandId,
      UserId: UserId,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteItem = (id) => {
  axios({
    method: "GET",
    url: `${url}/items/delete/${id}`,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateItem = (id, obj) => {
  const { name, type, img, price, description, BrandId, UserId } = obj;

  axios({
    method: "POST",
    url: `${url}/items/update/${id}`,
    data: {
      name: name,
      type: type,
      img: img,
      price: price,
      description: description,
      BrandId: BrandId,
      UserId: UserId,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getItems, getItem, addItem, deleteItem, updateItem };
