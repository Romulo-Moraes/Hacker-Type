const app = require("express")();
const body_parser = require("body-parser");
const path = require("path");
const filesystem = require("fs");
const express = require("express");

const /* Integer */ SERVER_PORT = 80;

app.use(express.static("static"));

/* Get route for get Hack type terminal */
app.get("/", (request,response) => {

    response.sendFile(path.resolve(__dirname,"..","static","html","hacker_type.html"));
});

/* Return a random script text to Front-End */
app.get("/sort_random_language_script", (request,response) => {
    let script_files = filesystem.readdirSync(path.resolve(__dirname,"..","scripts"));

    let the_choosed_one = script_files[Math.random() * (script_files.length - 1)]
    
    let file_text = filesystem.readFileSync(path.resolve(__dirname,"..","scripts",the_choosed_one),{encoding:"utf-8"});

    response.json({
        text : file_text
    })
});


app.listen(SERVER_PORT,() => {
    console.log(`Server running in port ${SERVER_PORT}`);
})