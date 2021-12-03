const Mongoose = require('mongoose');
const db = 'ecommerce';
import config from "../utils/config";
require('dotenv').config()

class DbServiceClass {
  constructor() {
    if (false){
      this.srv = `mongodb://localhost:27017/${db}`;
    }
    else{
      this.srv = `mongodb+srv://${config.MONGO_ATLAS_USER}:${config.MONGO_ATLAS_PASSWORD}@${config.MONGO_ATLAS_CLUSTER}.9xjxp.mongodb.net/${config.MONGO_LOCAL_DBNAME}?retryWrites=true&w=majority`;
      console.log('MONGO ATLAS', this.srv);
    }
  }

  async init(){
    await Mongoose.connect(this.srv)
    //.then((res)=> console.log('MONGO CONNECTED!!'))
    //.catch((error)=> console.log('MONGOOSE_ERROR:', error));
  }
  async disconnect(){
    await Mongoose.disconnect(this.srv)
    .then((res)=> console.log('MONGO DISCONNECTED!!'))
    .catch((error)=> console.log('MONGOOSE_DIS_ERROR:', error));
  }
} 

module.exports = new DbServiceClass() ;
