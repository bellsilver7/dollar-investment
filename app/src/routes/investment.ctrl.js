"use strict";

const logger = require("../config/logger");
const ExchangeRate = require("../models/ExchangeRate");
const Investment = require("../models/Investment");
const moment = require("moment");

const avaliableSearchDate = () => {
  // 비영업일의 데이터, 혹은 영업당일 11시 이전에 해당일의 데이터를 요청할 경우 null 값이 반환
  const format = "YYYYMMDD";
  if (
    moment().format("H") < 11 ||
    moment().format("dddd") === "토요일" ||
    moment().format("dddd") === "일요일"
  ) {
    return moment().add("-1", "days").format(format);
  }
  return moment().format(format);
};

const output = {
  index: (req, res) => {
    res.render("investment/index");
  },
  buy: async (req, res) => {
    const searchDate = avaliableSearchDate();
    const request = { searchDate: searchDate };
    const exchangeRate = new ExchangeRate(request);
    const response = await exchangeRate.get(request);
    logger.info(`GET /investing 200 "투자 화면으로 이동"`);
    response.data.searchDate = searchDate;
    res.render("investment/buy", response);
  },
};

const process = {
  buy: async (req, res) => {
    const investment = new Investment(req.body);
    const response = await investment.buy();
    const url = {
      method: "POST",
      path: "/investment/buy",
      status: response.error ? 400 : 200,
    };
    log(response, url);
    return res.status(url.status).json(response);
  },
};

const log = (response, url) => {
  if (response.error) {
    logger.error(
      `${url.method} ${url.path} ${url.status} Response: "${response.success} ${response.error}"`
    );
  } else {
    logger.info(
      `${url.method} ${url.path} ${url.status} Response: "${response.success} ${
        response.message || ""
      }"`
    );
  }
};

module.exports = {
  output,
  process,
};
