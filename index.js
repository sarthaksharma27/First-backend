const express = require('express');
const app = express();

const port = 8080;

app.set('view engine', 'ejs');


// app.get('/ig/:username', (req, res) => {
//     const followers = ['adam', 'bob', 'steve', 'abc'];
//     let {username} = req.params;
//     res.render('instagram.ejs', {username, followers});
// });

app.get('/rolldice', (req, res) => {
    let diceVal = Math.floor(Math.random() *6)+1
    res.render('rolldice.ejs', {diceVal})
});

app.listen(port, () => {
    console.log(`Server started on port 8080`);
});