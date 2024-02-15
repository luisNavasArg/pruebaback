const { Schema, model } = require("mongoose");

const wordSchema = new Schema({
  title: {
    type: String,
    required: [true, "Por favor, coloque un título"],
    trim: true,
    unique: true,
    
  },
  description: {
    type: String,
    required: [true, "Por favor, coloque una descripción"],
    trim: true,
  
  }
});

const Word = model("Word", wordSchema)

module.exports = Word;