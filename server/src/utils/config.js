const dotenv = require('dotenv');
const minimist = require('minimist');
dotenv.config();

const argv = minimist(process.argv.slice(2));

module.exports = {
    MODE: String(argv.mode) || 'FORK',
    NODE_ENV: argv.environment ? argv.environment : process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
    PORT: argv.port ? argv.port : process.env.PORT ? process.env.PORT : 8080,
    MONGO_ATLAS_USER : process.env.MONGO_ATLAS_USER || 'root',
    MONGO_ATLAS_PASSWORD : process.env.MONGO_ATLAS_PASSWORD || 'root',
    MONGO_ATLAS_CLUSTER : process.env.MONGO_ATLAS_CLUSTER || 'cluster0',
    MONGO_ATLAS_DBNAME : process.env.MONGO_ATLAS_DBNAME || 'ecommerce',
    MONGO_LOCAL_DBNAME : process.env.MONGO_LOCAL_DBNAME || 'ecommerce',
    FACEBOOK_APP_ID : argv.face_app_id || process.env.FACEBOOK_APP_ID,
    FACEBOOK_APP_SECRET : argv.face_app_secret|| process.env.FACEBOOK_APP_SECRET,
    ETHEREAL_EMAIL: process.env.ETHEREAL_EMAIL || 'americo.dicki24@ethereal.email',
    ETHEREAL_PASSWORD: process.env.ETHEREAL_PASSWORD || 'mndpNmhUqj7795SgJH',
    ETHEREAL_NAME: process.env.ETHEREAL_NAME || 'Americo Dicki',
    GMAIL_EMAIL: process.env.GMAIL_EMAIL || 'yonar1687@gmail.com',
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD || 'wsoizrfsvonesgao',
    GMAIL_NAME: process.env.GMAIL_NAME || 'Yonar Ramos',
    TWILIO_ACCOUNT_ID: process.env.TWILIO_ACCOUNT_ID || 'AC5a9f6b52187a7b3a48471ffd7c63b1a6',
    TWILIO_TOKEN: process.env.TWILIO_TOKEN || '20ef6967324d0be512f3f3120225989a',
    TWILIO_CELLPHONE: process.env.TWILIO_CELLPHONE || '+18035926595',
};