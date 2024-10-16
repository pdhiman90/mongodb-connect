require('dotenv').config();
const mongoose = require('mongoose');


class dbConnect{
    constructor(connectionString){
        this.connectionString=connectionString;
    }
   async getconn(){
        try {
            await mongoose.connect(this.connectionString);
            console.log("db connected");
        } catch (error) {
            console.log("db conn error",error);
            
        }
   } 
}

const value = process.env.MONGODB_URI;
const newConn = new dbConnect(value);


module.exports = newConn;
