"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _minimist = _interopRequireDefault(require("minimist"));

_dotenv["default"].config();

var argv = (0, _minimist["default"])(process.argv.slice(2)); //console.log('Argumentos Config:', process.argv);
//console.log('minimist config:', JSON.stringify(argv));

var venvs = {
  MODE: String(argv.mode) || 'FORK',
  PORT: Number(argv.port) || process.env.PORT,
  MONGO_ATLAS_USER: process.env.MONGO_ATLAS_USER,
  MONGO_ATLAS_PASSWORD: process.env.MONGO_ATLAS_PASSWORD,
  MONGO_ATLAS_CLUSTER: process.env.MONGO_ATLAS_CLUSTER,
  MONGO_ATLAS_DBNAME: process.env.MONGO_ATLAS_DBNAME,
  MONGO_LOCAL_DBNAME: process.env.MONGO_LOCAL_DBNAME,
  FACEBOOK_APP_ID: JSON.stringify(process.argv[3]) || process.env.FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET: JSON.stringify(process.argv[4]) || process.env.FACEBOOK_APP_SECRET,
  ETHEREAL_EMAIL: process.env.ETHEREAL_EMAIL || 'americo.dicki24@ethereal.email',
  ETHEREAL_PASSWORD: process.env.ETHEREAL_PASSWORD || 'mndpNmhUqj7795SgJH',
  ETHEREAL_NAME: process.env.ETHEREAL_NAME || 'Americo Dicki',
  GMAIL_EMAIL: process.env.GMAIL_EMAIL || 'yonar1687@gmail.com',
  GMAIL_PASSWORD: process.env.GMAIL_PASSWORD || 'wsoizrfsvonesgao',
  GMAIL_NAME: process.env.GMAIL_NAME || 'Yonar Ramos',
  TWILIO_ACCOUNT_ID: process.env.TWILIO_ACCOUNT_ID || 'AC5a9f6b52187a7b3a48471ffd7c63b1a6',
  TWILIO_TOKEN: process.env.TWILIO_TOKEN || 'fafabf01ce5eddc77cc7f932c79cede2',
  TWILIO_CELLPHONE: process.env.TWILIO_CELLPHONE || '+18035926595'
};
var _default = venvs;
exports["default"] = _default;