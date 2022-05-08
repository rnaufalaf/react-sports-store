import axios from "axios";

const url = "http://localhost:3000";

const getUsers = (callback) => {
  axios({
    method: "GET",
    url: `${url}/users`,
  })
    .then((users) => {
      callback(users.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getUser = (id, callback) => {
  axios({
    method: "GET",
    url: `${url}/users/${id}`,
  })
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addUser = (obj) => {
  const { username, phone, address, photo } = obj;
  axios({
    method: "POST",
    url: `${url}/users/create`,
    data: {
      username: username,
      phone: phone,
      address: address,
      photo: photo,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteUser = (id) => {
  axios({
    method: "GET",
    url: `${url}/users/delete/${id}`,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateUser = (id, obj) => {
  const { username, phone, address, photo } = obj;

  axios({
    method: "POST",
    url: `${url}/users/update/${id}`,
    data: {
      username: username,
      phone: phone,
      address: address,
      photo: photo,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getUsers, getUser, addUser, deleteUser, updateUser };
