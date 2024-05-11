const { getSuggestions } = require("../../models/suggestions/suggestion.model");

const getAllSuggestions = async (req, res) => {
  const suggestions = await getSuggestions(req.userId);
  res.status(200).json(suggestions);
};

module.exports = { getAllSuggestions };
