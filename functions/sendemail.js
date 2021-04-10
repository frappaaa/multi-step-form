const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        service: 'Gmail'
        auth:{
         user:'francescoluppi2@gmail.com',
         pass: 'tiqgev-7wuwce-dEwgyd'
    }
    });

    transporter.sendMail({
        from: 'francescoluppi2@gmail.com',
        to: 'francescoluppi@aol.com',
        subject: `Sending with React, Nodemailer and Netlify`,
        html: `
            <h3>Email from ${data.name} ${data.email}<h3>
            <p>${data.message}<p>
            `
    }, function(error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                   'result': 'success'
                })
        });
        }
    });
}