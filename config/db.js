const mongoose = require('mongoose');
const config = require('config');
const db = config.get('dbData');

const connectDB = async () => {
    try {
        await mongoose
            .connect(db.url, {
                user: db.username,
                pass: db.password
            });
        console.log('MongoDb Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;