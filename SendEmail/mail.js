const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'fb0da809e7e7ba54a6b329f28b0f8fbc-9c988ee3-405c647e',
        domain: 'sandboxd98309dfbd0a4c07be0b4e72697095a5.mailgun.org'
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
