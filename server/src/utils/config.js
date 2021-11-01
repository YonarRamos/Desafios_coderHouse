import dotenv from 'dotenv';
dotenv.config();

const venvs = {
    PORT: process.env.PORT,
    MONGO_ATLAS_USER : process.env.MONGO_ATLAS_USER,
    MONGO_ATLAS_PASSWORD : process.env.MONGO_ATLAS_PASSWORD,
    MONGO_ATLAS_CLUSTER : process.env.MONGO_ATLAS_CLUSTER,
    MONGO_ATLAS_DBNAME : process.env.MONGO_ATLAS_DBNAME,
    MONGO_LOCAL_DBNAME : process.env.MONGO_LOCAL_DBNAME,
    FACEBOOK_APP_ID : process.env.FACEBOOK_APP_ID,
    FACEBOOK_APP_SECRET : process.env.FACEBOOK_APP_SECRET,
};

export default venvs;
