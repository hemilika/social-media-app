const { getSuggestions } = require("../../models/suggestions/suggestion.model");

const getAllSuggestions = async (req, res) => {
  const suggestions = await getSuggestions();
  res.status(200).json(suggestions);
};

module.exports = { getAllSuggestions };
