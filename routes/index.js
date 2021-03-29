var express = require('express');
var router = express.Router();
var fs = require('fs');
var Jimp = require("jimp");
var qrCode = require('qrcode-reader');
var DomParser = require('dom-parser');
const fetch = require('node-fetch');
const puppeteer = require('puppeteer-extra');
require('dotenv').config();
// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// Add adblocker plugin to block all ads and trackers (saves bandwidth)
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')
puppeteer.use(AdblockerPlugin({ blockTrackers: true }))


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
    res.send(JSON.stringify({ value: number }));
 });
})
router.get('/decodeimage',function(req,res){
  
// That's it, the rest is puppeteer usage as normal 
puppeteer.launch({ headless: true }).then(async browser => {
  const page = await browser.newPage()
  await page.setViewport({ width: 640, height: 480 ,deviceScaleFactor: 1,})
  await page.goto('https://pasteboard.co/JA31TM0.png')
  await page.screenshot({ path: './files/image.png', fullPage: false })
  console.log(`All done, check the screenshots.`)
  await browser.close()
  var buffer = fs.readFileSync('./files/image.png');
  Jimp.read(buffer, function(err, image) {
    if (err) {
        console.error(err);
    }
    // Creating an instance of qrcode-reader module
    let qrcode = new qrCode();
    qrcode.callback = function(err, value) {
      console.log("here");
        if (err) {
            console.error(err);
        }
        // Printing the decrypted value
        console.log(value.result);
res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify({ value: value.result }));
         // Decoding the QR code
    };
   
});
});
});
   
  router.get('/location',function(req,res){
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=J3M2+M2 Lille&key='+process.env.API)
    .then(res => res.json())
    .then(json => {
      res.send(json);
    });
  })

  // var parser = new DomParser();
  //  fetch('https://eqrcode.co/a/RL7uJn')
  //   .then(res => res.text())
  //   .then(body => {
  //   var dom = parser.parseFromString(body,'text/html');
  //   // console.log(dom.getElementById('content').innerHTML);
  //   res.send(dom.getElementById('content').innerHTML);})
    
module.exports = router;
