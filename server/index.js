const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 4000;

require("dotenv").config();
const { DATABASE_URL } = process.env;
const { Sequelize } = require("sequelize");

// MIDDLEware

app.use(express.json());
app.use(cors());

// Endpoints

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

app.post("/addUser", (req, res) => {
  let { firstname, lastname, email, phonenumber, date, message } = req.body;
  console.log(req.body);
  sequelize
    .query(
      `
        INSERT INTO users(firstname, lastname, email, phonenumber, idealeventdate, message)
        VALUES('${firstname}','${lastname}','${email}','${phonenumber}','${date}','${message}') returning *;
    `
    )
    .then((dbRes) => {
      console.log(dbRes);
      res.status(200).send(dbRes[0]);
    })
    .catch((err) => console.log("creatUsers function is not  working", err));
});

const SERVER_PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`It's over ${PORT}!!!`));
