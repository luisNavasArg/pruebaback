const Router = require("express");
const { getWords, createWords, getWordsById, getWordsByParams } = require("../controllers/wordsControlers");

const router = Router();

router.route("/")
  .get(getWords)
  .post(createWords);

router.route("/search")
  .get(getWordsByParams);

router.route("/:id")
  .get(getWordsById);

module.exports = router;