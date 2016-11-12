var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname,'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/DSC03948.JPG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'DSC03948.JPG'));
});

app.get('/ui/DSC03995.JPG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'DSC03995.JPG'));
});
app.get('/ui/DSC04299.JPG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'DSC04299.JPG'));
});

app.get('/ui/DSC04307.JPG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'DSC04307.JPG'));
});

app.get('/ui/DSC04348.JPG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'DSC04348.JPG'));
});

app.get('/ui/DSC04434.JPG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'DSC04434.JPG'));
});

app.get('/ui/DSC04190.JPG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'DSC04190.JPG'));
});

app.get('/ui/DSC04134.JPG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'DSC04134.JPG'));
});
app.get('/ui/article1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article 1'));
});





var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
