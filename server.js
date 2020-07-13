//imported modules
const express =require("express");
const app = express();
const mongoose = require ("mongoose");
const bodyParser = require('body-parser');

//database connection
mongoose.connect("mongodb://localhost:27017/restapi", {useNewUrlParser: true, useUnifiedTopology: true},(err) => {
    if (!err) {
        console.log("Database connected..");
    }
    else {
        console.log(err);
    }
});

app.use(bodyParser.json());


app.use("/all", require('./routes/posts'));
app.use("/posts", require('./routes/posts'));

//rutes connection
app.get('/', (req, res) => {
    res.send("<h1>Hello</h1>")
})

//listening to the server
app.listen(3000, () => console.log("Server running on 3000"));