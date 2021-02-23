const Clarify = require("clarifai");

const app = new Clarifai.App({
  apiKey: "af464ed6cef04b50a25e9af1ddd877f6",
});

const handleApiCall = (req, res) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json("Unable to work with API"));
};

const handleEntry = (req, res, psql) => {
  const { id } = req.body;
  psql("users")
    .where("id", "=", id)
    .increment("entries", 1)
    .returning("entries")
    .then((entries) => {
      res.json(entries[0]);
    })
    .catch((err) => {
      res.status(400).json("unable to get entries");
    });
};

module.exports = { handleEntry, handleApiCall };
