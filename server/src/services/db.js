const Mongoose = require('mongoose');
const db = 'ecommerce';
require('dotenv').config()

class DbServiceClass {
  constructor() {
    if (false){
      this.srv = `mongodb://localhost:27017/${db}`;
    }
    else{
      this.srv = `mongodb://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@${process.env.MONGO_ATLAS_CLUSTER}.9xjxp.mongodb.net/${process.env.MONGO_ATLAS_DBNAME}?retryWrites=true&w=majority`;
      console.log('MONGO ATLAS', `${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@${process.env.MONGO_ATLAS_CLUSTER}.9xjxp.mongodb.net/${process.env.MONGO_ATLAS_DBNAME}?retryWrites=true&w=majority`);
    }
  }

  async init(){
    await Mongoose.connect(`mongodb+srv://root:root@cluster0.9xjxp.mongodb.net/ecommerce?retryWrites=true&w=majority`)
    .then((res)=> console.log('MONGO CONNECTED ==>', res))
    .catch((error)=> console.log('MONGOOSE_ERROR:', error));
  }
} 

module.exports = new DbServiceClass() ;
