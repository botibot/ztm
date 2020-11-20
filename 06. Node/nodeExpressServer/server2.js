const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/:id', (req, res) => {
    // console.log(req.query);
    // req.body
    // console.log(req.header)
    console.log(req.params)
    res.status(404).send("not found")
    // res.send("getting r00t");
});

app.listen(3000);


