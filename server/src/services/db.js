const Mongoose = require('mongoose');
const db = 'ecommerce';

class DbServiceClass {
  constructor() {
    if (true){
      this.srv = `mongodb://localhost:27017/${db}`;
    }
    else{
      this.srv = `mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@${process.env.MONGO_ATLAS_CLUSTER}.9xjxp.mongodb.net/${process.env.MONGO_ATLAS_DBNAME}?retryWrites=true&w=majority`;
      Mongoose.connect(this.srv);
      this.mensaje = Mongoose.model('mensajes', mensajesSchema);
      console.log('MONGO ATLAS CONNECTED');
    }
  }

  init(){
    Mongoose.connect(this.srv);
    console.log('MONGO LOCAL CONNECTED');
  }
} 

module.exports = new DbServiceClass() ;
