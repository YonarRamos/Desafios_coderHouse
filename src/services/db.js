const mongoose = require('mongoose');

( async () => {
    try {
        const URL = 'mongodb://localhost:27017/ecommerce';
        let rta = await mongoose.connect(URL);

        console.log("DB CONNECTED!!!");    
    } catch (e) {
        console.log("Error", e);
    }
}) ();