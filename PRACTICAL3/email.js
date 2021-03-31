var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shindep9294@gmail.com',
    pass: 'mypswd'
  }
});

var mailOptions = {
  from: 'shindep9294@gmail.com',
  to: 'pooja.shinde@walchandsangli.ac.in',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});