"use strict";

const investments = {};

const output = {
  buy: (req, res) => {
    res.render("investing");
  },
};

const process = {
  buy: (req, res) => {
    console.log(req.body);
  },
};

module.exports = {
  output,
  process,
};
