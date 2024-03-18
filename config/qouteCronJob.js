const nodemailer = require('nodemailer');

const quoteCronJob = (quote) => {
    const template =
        `<p style{{color:'red'}}>${quote.quote}</p>
        <p>~ ${quote.author}</p>
        `

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vishnupanday10@gmail.com',   //put your mail here
            pass: process.env.APP_PASSWORD     //password here
        }
    });
    const mailOptions = {
        from: 'vishnupanday10@gmail.com',        // sender address
        to: 'vishnupanday05315@gmail.com',       // reciever address
        subject: 'Quote of the day :)',
        html: template                           // plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(info);
        }
    });
}

module.exports = quoteCronJob;



