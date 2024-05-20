const nodemailer = require('nodemailer');
require("dotenv").config()

module.exports = (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        host: "smtp.gmail.com",
        CLIENT_ID: process.env.CLIENT_ID,
        CLIENT_SECRET: process.env.CLIENT_SECRET,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        },
        tls : { rejectUnauthorized: false },
        secure: true,
    });

    const {from} = req.body
    const path = require("path");
    const mailDetails = {
        to: 'stephenbrooks714@gmail.com',
        from: from,
        envelope: {
            from: 'from', // used as MAIL FROM: address for SMTP
            to: 'stephenbrooks714@gmail.com, Mailer <stephenbrooks714@gmail.comstephenbrooks714@gmail.com>' // used as RCPT TO: address for SMTP
        },
        replyTo: from,
        subject: "You got mail from Web Express Pro",
        headers: {
            'Web Express': 'high'
        },
        date: new Date('2000-01-01 00:00:00'),
        html: `<p>${req.body.text}</p> <h5>Sent From: ${req.body.name}</h5>`,
    };
    transporter.sendMail(mailDetails, function(err, info) {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/thankYou")
            console.log(info)
        }
    });
}