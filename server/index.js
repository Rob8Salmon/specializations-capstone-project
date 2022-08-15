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

app.listen(PORT, () => console.log(`It's over ${PORT}!!!`));

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

app.post("/addUser", (req, res) => {
  let { firstname, lastname, email, phonenumber, idealeventdate, message } = req.body;

  sequelize
    .query(
      `
        INSERT INTO users(firstname, lastname, email, phonenumber, idealeventdate, message)
        VALUES('${firstname}','${lastname}','${email}','${phonenumber}','${idealeventdate}','${message}');
    `
    )
    .then((dbRes) => {
      res.status(200).send(dbRes[0]);
    });
});

app.get()

