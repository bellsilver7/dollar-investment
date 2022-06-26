"use strict";

const app = require("../app");
const port = process.env.APP_PORT || 3000;
const logger = require("../src/config/logger");

app.listen(port, () => {
  logger.info(`${port} 포트에서 서버가 가동되었습니다.`);
});
