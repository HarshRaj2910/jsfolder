const http = require('http'); //importing http module. http module is used to create server and handle requests and responses
const PORT = 3030; //defining port number
const fs = require('fs'); //importing fs module. fs module is used to perform file operations like read, write, append, delete etc.
const url = require('url'); //importing url module. url module is used to parse the url and get the query parameters from the url

const server = http.createServer((req, res) => { //creating server using createServer method of http module. it takes a callback function with req and res as parameters
    const parsedUrl = url.parse(req.url, true); //parsing the url using url.parse() method. it returns an object with various properties like pathname, query, etc.
    const path = parsedUrl.pathname;  //getting the pathname from the parsed url. it gives the path of the url. it starts with /
    const method = req.method;  //getting the method from the request object. it gives the method of the request like GET, POST, PUT, DELETE, PATCH etc.
    if(path === '/' && method === 'GET') //checking if the path is / and method is GET is requested or not
    {
        res.writeHead(200, {'Content-Type': 'text/html'});  //setting the response header using writeHead() method. it takes status code and an object with key-value pairs as parameters
        res.end('<h1>This is the Home Page</h1>');  //ending the response using end() method. it takes the response data as parameter
    }
    else if(path === '/about' && method === 'GET') //checking if the path is /about and method is GET is requested or not
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>This is the About Page</h1>');
    }
    else if(path === '/users' && method === 'GET') //checking if the path is /users and method is GET is requested or not
    {
        const id = parsedUrl.query.id; //getting the id from the query parameters using parsedUrl.query.id
        res.writeHead(200, {'Content-Type': 'application/json'});
        if(id) //checking if id is present in the query parameters or not
        {
            res.end(JSON.stringify({id: id, name: `User ${id}`})); //sending the response as json using JSON.stringify() method
        }
        else
        {
            res.end(JSON.stringify([{id: 1, name: "Anusha Burnwal"}, {id: 2, name: "John Doe"}])); //sending the response as json array
        }
    }
    else if(path === '/data' && method === 'POST') //checking if the path is /data and method is POST is requested or not
    {
        let body = ''; //defining a variable to store the request body data
        req.on('data', chunk => body += chunk); //listening to the data event of the request object to get the request body data in chunks. data is being called multiple times until the whole data is received. here chunks is working as a buffer to store the data
        req.on('end', () => { //listening to the end event of the request object to know when the whole data is received
            let parsedBody;
            try {
                parsedBody = JSON.parse(body); //parsing the request body data using JSON.parse() method. if the request body data is in json format, then parsing it to json object
            }
            catch{
                parsedBody = {raw : body}; //if the request body data is not in json format, then storing the raw data
            }
            res.writeHead(201, {'Content-Type': 'application/json'}); //setting the response header with status code 201 (created)
            res.end(JSON.stringify({message: "Data received successfully", data: parsedBody})); //sending the response as json with message and the received data
        });
    }
    else
    {
        res.writeHead(404, {'Content-Type': 'text/html'}); //setting the response header with status code 404 (not found)
        res.end('<h1>404 Not Found</h1>'); //sending the response as html
    }
});
server.listen(PORT, () => console.log(`Server running on port ${PORT}`)); //listening to the server on the defined port and logging the message when the server is running