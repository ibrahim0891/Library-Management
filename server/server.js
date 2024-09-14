const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
const port = 3000;

app.post('/addbook', (req, res) => {
    console.log(req.body)
    res.send({ "message": "request recieved" });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});