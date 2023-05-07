const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./util/database");
const User = require("./models/User");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send("Form is submitted");
});

app.get("/user/addFood", (req, res, next) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/user/addFood", async (req, res, next) => {
  try {
    if (!req.body.table) {
      throw new Error("Table No is Mandatory");
    }

    const price = req.body.price;
    const product = req.body.productName;
    const table = req.body.table;

    const data = await User.create({
      price: price,
      productName: product,
      tableNo: table,
    });
    res.status(201).json({ newUserDetail: data });
    //res.redirect('/user/get-users')
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});
app.get("/user/getFood", async (req, res, next) => {
  const users = await User.findAll();
  res.status(200).json({ allUsers: users });
});

app.delete("/user/delete-food/:id", async (req, res, next) => {
  const uId = req.params.id;
  const data = await User.findByPk(uId);
  await User.destroy({ where: { id: uId } });
  // res.status(200);
  res.status(200).json({ deletedFood: data });
});

sequelize
  .sync()
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
