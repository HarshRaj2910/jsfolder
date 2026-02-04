const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    //here we will parse the url to get query parameters. the required url is being added with localhost:3000/?name=anusha&roll=39&address=asansol\
    //so that we can get the values of name, roll and address from the url
    //if we want to access these values, we can do it by using url.parse method of url module
    //such as url.parse(req.url, true).query.name will give us the value of name parameter from the url
    //for example, if the url is localhost:3000/?name=anusha&roll=39&address=asansol, then url.parse(req.url, true).query.name will give us 'anusha'
    //for roll, it will give us '39' and for address, it will give us 'asansol'
    //for more clarity, we can destructure the query object from url.parse(req.url, true)
    const { query} = url.parse(req.url, true); //here url.parse() returns an object which contains query object
    res.writeHead(200, {'Content-Type': 'application/json'}); //here we are setting the content type as json. application/json is used to send json response
    res.end(JSON.stringify(query)); //here we are sending the query object as json response
});
server.listen(3000, () => console.log("Server running on port 3000"));