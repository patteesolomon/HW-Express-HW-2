const express = require('express');
const app = express();
const port = 3000;

app.get('/greeting/:aname/', (req, res) => 
{
    res.send('Wow! Hello There ' + `${req.params.aname}!`);
});

app.listen(port, () => 
{
    console.log('listening on port' , port);
});

app.get('/tip/:total/:tipPercentage/', (req, res) => 
{
    res.send(`${req.params.tipPercentage}`);
});

