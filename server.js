const port = 3000;
const express = require("express");
const app = express();

// to use view engine
app.set("view engine", "ejs")

// loggin out the request url and method
app.use("/", (req, res, next) => {
    console.log(req.url, req.method);
    next();
})

// setting a status and sending a message together
app.get("/", (req, res) => {
    res.status(200).send("Hello string from server response");
})

// sending json in response to a get request with a status
app.get("/json", (req, res) => {
    res.status(408).json({message: "408 created error"})
})

// sending down a file? not sure why u would do this but
/*app.get("/download", (req, res) =>{
    res.download("server.js")
})*/

// sending down html
app.get("/html", (req, res) =>{
    res.render("index", {test_data: "Test data1"})
})


// starting the server
app.listen(port, () => {
    console.log(`Practice express server listening on port: ${port}`);
})