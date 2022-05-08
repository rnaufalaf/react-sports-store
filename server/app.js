require("dotenv").config();

const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use(cors());

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/src/images");
  },
  filename: (req, file, cb) => {
    cb(null, Math.round(new Date() / 1000) + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });
app.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file);
});

const routes = require("./routes");
app.use(routes);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
