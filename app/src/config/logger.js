const { createLogger, transports, format } = require("winston");
const { combine, timestamp, label, printf, colorize } = format;

const printFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level} : ${message}`;
});

const createLogFormat = combine(
  label({
    label: "node js",
  }),
  colorize(),
  timestamp({
    format: "YYYY-MM-DD HH:mm:dd",
  }),
  printFormat
);

const logger = createLogger({
  transports: [
    new transports.Console({
      level: "http",
      format: createLogFormat,
    }),
  ],
});

module.exports = logger;
