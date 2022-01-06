const Config = require ('../utils/config');
const nodemailer = require ('nodemailer');
const path = require ('path');

class Email {
  constructor() {
    this.owner = {
      name: Config.GMAIL_NAME,
      address: Config.GMAIL_EMAIL,
    };

    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: Config.GMAIL_EMAIL,
        pass: Config.GMAIL_PASSWORD,
      },
    });

    this.transporter.verify().then(() => console.log('READY To Send Gmail'));
  }
  async sendEmail(dest, subject, content) {
    const mailOptions = {
      from: this.owner,
      to: dest,
      subject,
      html: content,
      attachments: [
        {
          // filename and content type is derived from path
          path: path.join(__dirname, '../../public/nodemailer.png'),
        },
      ],
    };

    const response = await this.transporter.sendMail(mailOptions);
    return response;
  }
}

const GmailService = new Email();
module.exports = GmailService;