import dotenv from 'dotenv';
dotenv.config();

const venvs = {
    PORT: Number(process.argv[2]) || process.env.PORT,
    MONGO_ATLAS_USER : process.env.MONGO_ATLAS_USER,
    MONGO_ATLAS_PASSWORD : process.env.MONGO_ATLAS_PASSWORD,
    MONGO_ATLAS_CLUSTER : process.env.MONGO_ATLAS_CLUSTER,
    MONGO_ATLAS_DBNAME : process.env.MONGO_ATLAS_DBNAME,
    MONGO_LOCAL_DBNAME : process.env.MONGO_LOCAL_DBNAME,
    FACEBOOK_APP_ID : JSON.stringify(process.argv[3]) || process.env.FACEBOOK_APP_ID,
    FACEBOOK_APP_SECRET : JSON.stringify(process.argv[4]) || process.env.FACEBOOK_APP_SECRET,
};
console.log('argv:', Number(process.argv[2]), JSON.stringify(process.argv[3]));
export default venvs;
