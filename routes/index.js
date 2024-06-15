const express = require("express");
const router = express.Router();
const userModel = require("./users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const upload = require('./multer');
const path = require("path");
const uploadsPath = path.join(__dirname, "uploads");
router.use("/uploads", express.static(uploadsPath));

router.get('/', function (req, res) {
  res.render('index');
});



router.post("/register", async function (req, res) {
  let { email, password, fullname } = req.body;

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {

      let user = await userModel.create({
        fullname,
        email,
        password: hash,
      });
      let token = jwt.sign({ email: user.email, id: user._id }, "dffsdfsfsd");
      res.cookie("token", token);
      res.render("shop");

    });
  })
});

module.exports = router;


















router.get('/shop', function (req, res) {
  res.render('shop');
});


router.get('/cart', function (req, res) {
  res.render('cart');
});
















module.exports = router;


