"use strict";

const logger = require("../config/logger");
const ExchangeRate = require("../models/ExchangeRate");
const moment = require("moment");

const avaliableSearchDate = () => {
  // 비영업일의 데이터, 혹은 영업당일 11시 이전에 해당일의 데이터를 요청할 경우 null 값이 반환
  const format = "YYYYMMDD";
  if (
    moment().format("h") < 11 ||
    moment().format("dddd") === "토요일" ||
    moment().format("dddd") === "일요일"
  ) {
    return moment().add("-1", "days").format(format);
  }
  return moment().format(format);
};

const output = {
  page: async (req, res) => {
    const searchDate = avaliableSearchDate();
    const request = { searchDate: searchDate };
    const exchangeRate = new ExchangeRate(request);
    const response = await exchangeRate.get(request);
    logger.info(`GET /investing 200 "투자 화면으로 이동"`);
    response.data.searchDate = searchDate;
    console.log(Object.assign(response.data, request));
    res.render("investing", response);
  },
  exchangeRate: async (req, res) => {
    // const response = await ExchangeRate.get();
    logger.info(`GET /investing/exchange-rate 200 "환율 정보 조회"`);
    return res.status(200).json(response);
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
