const express = require('express');
const sendMail = require('./mail');

const log = console.log;
const app = express();
const path = require('path');

const PORT = 8080;

// Data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// email, subject, text
app.post('/email', (req, res) => {
    // TODO:
    // send email-here
    const { subject, name, email, text } = req.body;
    console.log('Data: ', req.body);

    sendMail(name, email, subject, text, function(err, data){
        if (err) {
            res.status(500).json({ message: 'internal error'});
        } else {
            res.json({ message: 'Email Sent !!!'});
        }
    });
    
});

app.use(express.static(path.join(__dirname, 'views')));

app.listen(PORT, () => log('server is starting on PORT, ', 8080));