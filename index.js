var express = require('express');
var exphbs = require('express-handlebars')
var bodyparser = require('body-parser')


var app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyparser.urlencoded({extended: false}))
app.set(bodyparser.json())

app.get('/', function (req,res){
    
    res.render("index")
})

app.post("/summary", function(req,res){
    
    var actualCode = req.body.code


    res.render('summary', {enterCode: actualCode})
})

var PORT = process.env.PORT || 3008;

app.listen(PORT, function(){

})