var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) =>{
    res.send('hello world!!');
});

//add two numbers
app.get('/add/:num1/:num2', (req,res) => {
    
    var n1 = parseFloat(req.params.num1);
    var n2 = parseFloat(req.params.num2);
    var sum = (n1 + n2).toString();
    res.send(sum)
    //res.render('add', {number : sum});
});

app.get('/sub/:num1/:num2', (req,res) =>{
    var n1 = parseFloat(req.params.num1);
    var n2 = parseFloat(req.params.num2);
    var sub = (n1 - n2).toString();
    res.send(sub)
    //res.render('sub', {number : sub});
});


app.get('/mul/:num1/:num2', (req,res) =>{
    var n1 = parseFloat(req.params.num1);
    var n2 = parseFloat(req.params.num2);
    var mul = (n1 * n2).toString() ;
    res.send(mul)
   // res.render('mul', {number : mul});
});


app.get('/div/:num1/:num2', (req,res) =>{
    var n1 = parseFloat(req.params.num1);
    var n2 = parseFloat(req.params.num2);
    var div = (n1 / n2).toString();
    res.send(div)
    //res.render('div', {number : div});
});


const port =  process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}...`));