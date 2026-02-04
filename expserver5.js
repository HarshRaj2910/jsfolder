const express = require("express"); //importing express module
const app = express(); //creating an express application

app.post('/employee/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Your User is : ${userId}`);
});
app.listen(3000, () => console.log('Employee API server listening on port 3000!')); //starting the server on port 3000