var express = require("express");
var router = express.Router();
var _ = require("lodash");
var users = require("../init_data.json").data;
var nunjucks = require("nunjucks");

router.get("/", function (req, res) {
  res.render("../public/admin", { users: users });
});

module.exports = router;
