const { createLogger, transports, format } = require("winston");
const { combine, timestamp, label, printf, colorize, simple } = format;

const printFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level} : ${message}`;
});

const createLogFormat = {
  file: combine(
    label({
      label: "node js",
    }),
    timestamp({
      format: "YYYY-MM-DD HH:mm:dd",
    }),
    printFormat
  ),
  console: combine(colorize(), simple()),
};
const opts = {
  file: new transports.File({
    dirname: "./logs",
    filename: "access.log",
    level: "http",
    format: createLogFormat.file,
  }),
  console: new transports.Console({
    level: "http",
    format: createLogFormat.console,
  }),
};

const logger = createLogger({
  transports: [opts.file],
});

if (process.env.APP_ENV !== "production") {
  logger.add(opts.console);
}

logger.stream = {
  write: (message) => logger.info(message),
};

module.exports = logger;
