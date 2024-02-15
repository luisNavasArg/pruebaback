const Word = require("../models/wordsModel");

const handleError = (res, error, message) => {
  console.error(error);
  res.status(500).json({ message: message });
};

exports.getWords = async (req, res) => {
  try {
    const words = await Word.find({});
    res.status(200).json({ ok: true, words });
  } catch (error) {
    handleError(res, error, "Hubo un error al obtener las palabras");
  }
};

exports.createWords = async (req, res) => {
  try {
    const newWord = await Word.create({ ...req.body });
    res.status(201).json({ message: "Se creó exitosamente", word: newWord });
  } catch (error) {
    handleError(res, error, "Hubo un error al crear la palabra");
  }
};

exports.getWordsById = async (req, res) => {
  try {
    const { id } = req.params;
    const word = await Word.findById(id);
    res.status(200).json({ ok: true, word });
  } catch (error) {
    handleError(res, error, "Hubo un error al obtener la palabra por ID");
  }
};

exports.getWordsByParams = async (req, res) => {
  try {
    const title = req.query.q;
    const regex = new RegExp(title, 'i');
    const words = await Word.find({ title: regex });
    res.status(200).json({ ok: true, words });
  } catch (error) {
    handleError(res, error, "Hubo un error al obtener las palabras por parámetros");
  }
};
