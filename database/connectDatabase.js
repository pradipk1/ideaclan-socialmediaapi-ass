
const mongoose = require('mongoose');


const mongodbAtlasConnectionUrl = 'mongodb+srv://socialMediaUser:socialMediaUser123@cluster0.ysnmozx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function connectDatabase() {
    // return await mongoose.connect('mongodb://127.0.0.1:27017/social-media');
    return await mongoose.connect(mongodbAtlasConnectionUrl);
}


module.exports = connectDatabase;