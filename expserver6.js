const express = require('express'); //importing express module
const app = express(); //creating an express application
const PORT = 3000;
app.use(express.json()); //middleware to parse JSON request bodies

app.get("/users/:userId/books/:bookId", (req, res) => {
    res.send({
        params: req.params,
        query: req.query
    });
}); //defining a route for the users/books URL
app.post("/users/:userId/books/:bookId", (req, res) => {
    res.send({
        params: req.params,
        query: req.query,
        body: req.body
    });
});
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`)); //starting the server on port 3000