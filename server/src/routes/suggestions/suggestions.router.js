const express = require("express");
const { getAllSuggestions } = require("./suggestions.controller");
const suggestionsRouter = express.Router();

suggestionsRouter.get("/suggestions", getAllSuggestions);

module.exports = { suggestionsRouter };
