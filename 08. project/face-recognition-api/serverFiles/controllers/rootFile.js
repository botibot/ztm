const handleRoot = (req, res, psql) => {
  psql
    .select("*")
    .from("users")
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.json("alive, no data base"));
};

module.exports = { handleRoot };
