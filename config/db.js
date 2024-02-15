require('dotenv').config(); 
const mongoose = require('mongoose');
console.log(process.env.MONGODB_CNN);
const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_CNN, {
               
        });
        console.log("Conectado");
    } catch (error) {
        console.log(error);
        throw new Error("Error al conectar");
      }
};

module.exports = connectDB;
