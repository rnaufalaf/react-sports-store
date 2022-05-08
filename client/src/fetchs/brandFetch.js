import axios from "axios";

const url = "http://localhost:3000";

const getBrands = (callback) => {
  axios({
    method: "GET",
    url: `${url}/brands`,
  })
    .then((brands) => {
      callback(brands.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getBrand = (id, callback) => {
  axios({
    method: "GET",
    url: `${url}/brands/${id}`,
  })
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addBrand = (obj) => {
  const { name, logo, description } = obj;
  axios({
    method: "POST",
    url: `${url}/brands/create`,
    data: {
      name: name,
      description: description,
      logo: logo,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteBrand = (id) => {
  axios({
    method: "GET",
    url: `${url}/brands/delete/${id}`,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateBrand = (id, obj) => {
  const { name, logo, description } = obj;

  axios({
    method: "POST",
    url: `${url}/brands/update/${id}`,
    data: {
      name: name,
      logo: logo,
      description: description,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getBrands, getBrand, addBrand, deleteBrand, updateBrand };
