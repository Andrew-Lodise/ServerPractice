# basics

## creating a express server 
    cmd > npm install express

const express = require("express");
const app = express();

## to start a server
app.listen(port, () => {
    console.log(`Practice express server listening on port ${port}`)
})

## to initialize your project
cmd > npm init -y 

## a simple get handler 
app.get("/", (req, res) => {
    res.send("Hello from server response")
})

### note:
    app.use is for middlewear, app.get is for url routing

## loggin out the request url and method
app.use("/", (req, res, next) => {
    console.log(req.url, req.method);
    next(); // you need next to continue the program
})

## to set up nodemon and package-lock.json
    cdm > npm i nodemon

    - then paste this script into package.json
    "dev": "nodemon server.js" 
    // now you can just use this to start the server 
        cmd > npm run dev 

## setting a status and sending a message together
app.get("/", (req, res) => {
    res.status(200).send("Hello string from server response");
})

## sending json in response to a get request with a status
app.get("/json", (req, res) => {
    res.status(408).json({message: "408 created error"})
})

## sending down a file? not sure why u would do this but
app.get("/download", (req, res) =>{
    res.download("server.js")
})
---
# HTML file sending with ejs

    1. make a folder called views
    2. make a index.ejs file 

### next we need a view engine (install ejs)
    cmd > npm i ejx

// to use view engine
app.set("view engine", "ejs")

## sending down html with ejs

app.get("/html", (req, res) =>{
    res.render("index") // input your filename without the .jsx reguardless of place in repo?
    // my file is index.jsx
})

## sending down html along with data
app.get("/html", (req, res) =>{
    res.render("index", {test_data: "Test data"})
})

### accessing that data from the client side 
<body>
    <%= test_data || "default text" %> // ejs notation
</body>
