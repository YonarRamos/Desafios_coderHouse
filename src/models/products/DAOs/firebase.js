const admin = require("firebase-admin");
const moment = require('moment');
const Config = require('../../../config');
var serviceAccount = require("./firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

//accedo a la db
const db = admin.firestore();
const productsCollection = db.collection('productos');

class ProductosFirebaseDAO {
  constructor() {
    this.productos = productsCollection;
  }

  async get(id) {
    if(id){
      let result = await this.productos.doc(id).get();
      return ({
        id: result.id,
        data: result.data(),
      });

    }else{
      let resultado = await this.productos.get();

      let docs = resultado.docs;

      let result = docs.map(aDoc => ({
          id: aDoc.id,
          data: aDoc.data()
      }))

      return result;
    }
  } 

  async add(data) {
    try{
        const PrDocument = productsCollection.doc();
        const result =  await PrDocument.create(data);   //vamos a crear un documento cuya key sea (algo generico)                                               //a ese documento le metemos data en formato json
        console.log("salio todo bien!")       
        return result; 
    }
    catch(err){
        console.log("ERROR");
        console.log(err);
    }
}

  async update(id, newProductData){
    const miDoc = UserDB.doc(id);

    console.log(miDoc);

    //Chequear si existe sino no seguir.
    await UserDB.doc(id).update(data);
    console.log('salio bien');
    return this.get(id);
}

  async delete(id) {
    await UserDB.doc(id).delete()
    console.log('done');
  }
} 

module.exports =  ProductosFirebaseDAO ;