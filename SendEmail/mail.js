const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '',
        domain: ''
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));
// Chunk 4
const sendMail = (email,subject,text, cb) => {
    const mailOptions = {
        from: email,
        to: 'favorivideo628@gmail.com',
        subject,
        text
    };
    
    transporter.sendMail(mailOptions,function(err,data){
        if(err){
            cb(err,null);
        } else {
            cb(null,data);
        }
    });
}

module.exports = sendMail;

// subject
// text
// from
