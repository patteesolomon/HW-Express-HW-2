const express = require('express');
const app = express();
const port = 3000;

var magic8 = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

var hmax = 0;
var hmin = 18;

var magicE = null;

randT = (hmax, hmin) => Math.floor(Math.random() * (hmax - hmin + 1)) + hmin;

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
    var totalp = req.params.total / req.params.tipPercentage;
    res.send(`${totalp}`);
});

app.get('/magic', (req, res) => {

    
    res.send('ask a question here...^');
});

app.get(`/magic/:callQ`, (req, res) =>
{
    magicE = req.params.callQ;
    if (magicE != null) {
        for (let i = 0; i < magicE.length; i++) {
                magicE = magicE.replace(' ','%20');
            }
            magicE = req.params.callQ;
        res.redirect(`/magic/callQ/${magicE}`);
    }
    else
    {
        res.send('ask again.');
    }
});

app.get(`/magic/callQ/:response`, (req, res) =>{
    if (magicE != null)
    {
        res.send(`<h1> ${magicE} : ${magic8[randT(hmin, hmax)]}</h1>`);
        magicE = '';
        res.send('ask another!...^');
    }
});