const mongoose = require('mongoose');
let instance = null;
class Database{
    constructor(){
        if(!instance) {
            this.mongoConnection = null;
            instance=this;
        }
        return instance;
    }
    async connect(options) {
        try{
            console.log("Database connection...");
        let db = await mongoose.connect(options.CONNECTION_STRING);

        this.mongoConnection = db;
        console.log("Database connected successfully");
        }catch (err) {
            console.error(err);
            process.exit(1); // Exit the process if connection fails
        }
    }
}


module.exports = Database;