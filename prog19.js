const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let filePath = "";
    if(req.url === "/" || req.url === "/index")
    {
        filePath = "index.html";
    }
    else if(req.url === "/about")
    {
        filePath = "about.html";
    }
    else if(req.url === "/contact")
    {
        filePath = "contact.html";
    }
    else
    {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 Not Found</h1>');
        return;
    }
    fs.readFile(filePath, (err, data) => {
        if(err)
        {
            res.writeHead(500);
            return res.end('<h1>Server Error</h1>');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});
server.listen(3000, () => console.log("Server running on port 3000"));