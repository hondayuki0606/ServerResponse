// Your code here!

var http = require('http');
var server = http.createServer();

var fs = require('fs');
var xml_string;

server.on('request', function (req, res) {
    if (req.url.indexOf('TestAPI') != -1) {
        fs.readFile('./folderSearch/stub_200_return.xml', 'utf-8', (err, files) => {
            if (err) {throw err;}
            xml_string = files;
            res.writeHead(200,{'Content-Type':'application/xml'});
            res.end(xml_string);
        });
    }
});

server.listen(3000);
