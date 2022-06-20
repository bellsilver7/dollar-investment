"use strict";

const page = (req, res) => {
  res.render("index");
};

const buy = (req, res) => {
  res.send("구매");
};

module.exports = {
  page,
  buy,
};
