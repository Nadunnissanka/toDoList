const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));//use bodyParser
app.use(express.static("public"));//static files
const port = 3000;
app.set('view engine','ejs'); //use ejs

let nextItem =["Buy Food","Eat Food","Clear Up"];
let workList =[];

app.get("/", function(req, res){
    
    let today = date();

    res.render("list", {
        listTitle: today,
        newItem: nextItem
    });//pass to ejs as javascript object
    
});

app.post("/", function(req, res){
    console.log(req.body);//temp to find the request made and its values
    let item = req.body.newItem;

    if(req.body.list === 'Work'){
        workList.push(item);
        res.redirect('/work');
    }else{
        nextItem.push(item);
        res.redirect("/");  
    }
});

app.get("/work", function(req, res){
    res.render("list",{
        listTitle: 'Work',
        newItem: workList
    });
});

app.get("/about", function(req, res){
    res.render("aboutus");
});

app.listen(port, function(){
    console.log("Listening on port: localhost:"+port)
});