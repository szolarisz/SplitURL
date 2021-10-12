const url = require('url');
const http = require('http');
const port = 4444;

const server = http.createServer( (req,res) => {
    console.log( req.url);
    const myURL = "https://szerverem.com/pictures/kep.jpg?nev=Higany Alfonz&kor=32";
    //const urlData = url.parse( req.url, true );
    
    const urlData = url.parse( myURL, true );
    
    console.log( urlData.host );
    console.log( urlData.port );
    console.log( urlData.hostname);
    console.log( urlData.pathname );

    console.log( urlData.search);
    
    const paramObject = urlData.query;
    
    console.log( paramObject.nev);
    console.log(paramObject.kor);

    res.setHeader('Content-type', 'text/html; charset=utf-8');
    res.writeHead(200);
    res.write(`Host name: ${urlData.hostname}<br>`);
    res.write(`Path name: ${urlData.pathname}<br>`);
    res.write(`Parameters: ${urlData.search}<br>`);
    res.write(`Név: ${paramObject.nev}<br>`);
    res.write(`Kor: ${paramObject.kor}`);
    res.end("feldolgozás kész");
});

server.listen(port);