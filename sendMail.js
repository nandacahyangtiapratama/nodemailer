var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'npcahyangtia@gmail.com',
        pass: 'Nandapra2020'
    }
});

var mailOptions = {
    from: 'npcahyangtia@gmail.com',
    to: 'backup.nanda7@gmail.com',
    subject: 'Sending Email using Nodejs',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
});