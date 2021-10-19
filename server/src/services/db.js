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
      //console.log('MONGO ATLAS', `${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@${process.env.MONGO_ATLAS_CLUSTER}.9xjxp.mongodb.net/${process.env.MONGO_ATLAS_DBNAME}?retryWrites=true&w=majority`);
    }
  }

  init(){
    Mongoose.connect(`mongodb+srv://root:root@cluster0.9xjxp.mongodb.net/ecommerce?retryWrites=true&w=majority`);
    //console.log('MONGO CONNECTED');
  }
} 

module.exports = new DbServiceClass() ;
