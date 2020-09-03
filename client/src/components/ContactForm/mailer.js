import NodeMailer from 'nodemailer';

export default (subject, email, message) => {
  const transporter = NodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jacobmayday@gmail.com',
      pass: process.env.EMAIL_PASS
    }
  });

  const options = {
    from: 'jacobmayday@gmail.com',
    to: 'jacobmayday@gmail.com',
    subject: subject,
    text: message + '\n FROM ' + email
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
