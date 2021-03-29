var express = require('express');
var router = express.Router();
var fs = require('fs');
var DomParser = require('dom-parser');
const fetch = require('node-fetch');
const puppeteer = require('puppeteer');
require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/pinumber', function(req, res, next) {
  var search = req.query.searchnext;
  console.log(search);
  
  var readStream = fs.createReadStream('./files/pi_10_millions.txt','utf8');
  readStream.on('open',function(){
    //  readStream.pipe(res);
  });//10138
  // Pull off a header delimited by \n\n
// use unshift() if we get too much
// Call the callback with (error, header, stream)
var chunk;
var found='';
  readStream.on('data',function(data){
    if( data.match((search) )){
     chunk = data;
    var index =chunk.indexOf(search);
    found+= chunk.substring(index+6,index+13); 
   }
    else{
    }
   
  });
  readStream.on('end',function() {
    const number = found.substring(0,7).replace(/\s/g, '');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ value: number }));
 });
})
router.get('/decodeimage',function(req,res){
  var parser = new DomParser();
  (async () => {
    const browser = await puppeteer.launch({headless: true,
      args: [
        '--disable-extensions-except=/path/to/manifest/folder/',
        '--load-extension=/path/to/manifest/folder/',
      ]});
    const page = await browser.newPage();
    await page.goto('https://pasteboard.co/JA31TM0.png');
    await page.screenshot({ path: './files/image.png' });
  
    await browser.close();
    await fetch('https://eqrcode.co/a/RL7uJn')
    .then(res => res.text())
    .then(body => {
    var dom = parser.parseFromString(body,'text/html');
    // console.log(dom.getElementById('content').innerHTML);
    res.send(dom.getElementById('content').innerHTML);
  });
  })(); 
  });
   
  router.get('/location',function(req,res){
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=J3M2+M2 Lille&key='+process.env.API)
    .then(res => res.json())
    .then(json => {
      res.send(json);
    });
  })
    
module.exports = router;
