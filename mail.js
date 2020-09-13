const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
    auth:{
        api_key: 'key-cefd3fe08dc16f25977e51567604a123',
        domain: 'sandboxbab575900d4d41d09568a44db215c8e4.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (name, email, subject, text, cb) => {
    const mailOption = {
        from: email,
        to: 'hopmominirfan@gmail.com',
        name,
        subject,
        text
    };

    transporter.sendMail(mailOption, function(err, data){
        if (err) {
            cb(err, null);
        }
        else {
            cb(null, data);
        }
    });
}

module.exports = sendMail;