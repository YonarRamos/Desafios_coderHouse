const Config = require ('../utils/config');
const nodemailer = require ('nodemailer');

class Email {

  constructor() {
    this.owner = {
      name: Config.ETHEREAL_NAME,
      address: Config.ETHEREAL_EMAIL,
    };

    this.transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: Config.ETHEREAL_EMAIL,
        pass: Config.ETHEREAL_PASSWORD,
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    },
    });

    this.transporter.verify().then(() => console.log('READY To Send Etheral email'));
  }

  async sendEmail( dest, subject, content ) {
    const mailOptions = {
      from: this.owner,
      to: dest,
      subject,
      html: content,
    };

    const response = await this.transporter.sendMail(mailOptions);
    return response;
  }
}

const EmailService = new Email();
module.exports = EmailService;
