var express = require('express');
var exphbs = require('express-handlebars')
var bodyparser = require('body-parser')
var medsApp = require('./meds-app')

var app = express()

const medApp = medsApp()

app.use(express.static('public'))

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyparser.urlencoded({extended: false}))
app.set(bodyparser.json())

app.get('/', function (req,res){
    res.render('index')
})

app.post("/summary", function(req,res){
    const med =  medApp.diffCode(req.body.code)
    //console.log(med);
    
    if (med) {
        res.render('inconvinience', {})
    } else {
        res.render("index")
    }
    // res.render('summary', {enterCode: actualCode})
})

app.get("/deliverySchedule", function (req, res){
    if (status){
        res.render
    }
    res.render(deliverySchedule)
})

// app.get("/thankyou", function(req, res){
    
//  res.render("thankyou", )
// })

var PORT = process.env.PORT || 3008;

app.listen(PORT, function(){

})