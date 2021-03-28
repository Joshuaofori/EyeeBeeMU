var express = require('express');
var router = express.Router();
var fs = require('fs');
const fetch = require('node-fetch');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/pinumber', function(req, res, next) {
  
  var readStream = fs.createReadStream('./files/pi_10_millions.txt','utf8');//{ start: 10000, end: 10178 }
  readStream.on('open',function(){
    //  readStream.pipe(res);
  });//10138
  // Pull off a header delimited by \n\n
// use unshift() if we get too much
// Call the callback with (error, header, stream)
var chunk;
var found='';
  readStream.on('data',function(data){
    if( data.match(('036695') )){
    console.log("i found it");
     chunk = data;
    var index =chunk.indexOf('036695');
    console.log(index);
    found+= chunk.substring(index+6,index+13); 
   }
    else{
      console.log("not here");
    }
   
  });
  readStream.on('end',function() {
    console.log(found);
    const number = found.substring(0,7).replace(/\s/g, '');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ value: number }));
 });
  
})

module.exports = router;
