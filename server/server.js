const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello world")
})
 

app.post('/addbook', (req, res) => {
    console.log(req.body)
    
    res.send({ "message": "request recieved" });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


//th is a a good looking comments 