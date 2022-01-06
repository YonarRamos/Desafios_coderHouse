const multer = require("multer");
const Mongoose = require('mongoose');
const GridFsStorage = require("multer-gridfs-storage");
const config = require("../utils/config");
const mongoURI = `mongodb+srv://${config.MONGO_ATLAS_USER}:${config.MONGO_ATLAS_PASSWORD}@${config.MONGO_ATLAS_CLUSTER}.9xjxp.mongodb.net/${config.MONGO_LOCAL_DBNAME}?retryWrites=true&w=majority`;
const promise = Mongoose.connect(mongoURI);

const conn = Mongoose.connection;
let storage;

conn.once('open',() => {
    storage = new GridFsStorage({
        url:promise,
        options: { useNewUrlParser: true, useUnifiedTopology: true },
        file: (req, file) => {
            const match = ["image/png", "image/jpeg"];
    
            if (match.indexOf(file.mimetype) === -1) {
                const filename = `${Date.now()}-any-name-${file.originalname}`;
                return filename;
            }
    
            return {
                bucketName: "photos",
                filename: `${Date.now()}-any-name-${file.originalname}`,
            };
        },
    });
    
});

module.exports = multer({ storage });