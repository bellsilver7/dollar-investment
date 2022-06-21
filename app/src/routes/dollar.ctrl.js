"use strict";

const investments = {};

const output = {
  page: (req, res) => {
    res.render("index");
  },
  buy: (req, res) => {
    console.log(1);
    res.send("구매");
  },
};

const process = {
  buy: (req, res) => {
    console.log(2);
    console.log(req.body);
    res.send("구매");
  },
};

module.exports = {
  output,
  process,
};
