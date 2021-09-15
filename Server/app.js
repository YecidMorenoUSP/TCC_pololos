const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const jsonTest = [["Server TCC_pololos","V1.0","Yecid Moreno"],{"name1":"Primer nombre"}];

const server = http.createServer((req, res) => {
    if (req.method == 'GET'){ 
        run1(req,res);
    }
});

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}

async function run1(req, res){
    if(req.url == "/" || req.url == "/test"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(JSON.stringify(jsonTest[0]));
    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404\n');
    }
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

