# EyeeBeeMU
# Steps to install project
1. Clone the server to your machine
2. run the command  'npm install' 
3. run npm start to start the server.
4. go to your browser and get the url: localhost:3000

# Algorithm
# APIS
# Search for the next six numbers after a given number.
localhost:3000/pinumber/?searchnext={the given number}
returns the next six of the given number.
nb: some of the returned data might be not be what it is expected the reason is our data for the 
pi has some formatting to be done to it, since pi has no ending and with this api we have up to 10 million.
there are space and colons in our data so we are editing the data the final edited data will be deployed soon.
# Decode a pasteboard qr code image
it returns the decode text of the qr code of the pasteboar url
works on pasteboard with one qr-code
localhost:3000/decodeimage/?url={the given url}
# LinkValue
For this special project the pasteboard qr code is a link ther for this api return the 
content of the link.
localhost:3000/linkvalue/?url={the given url}
  




