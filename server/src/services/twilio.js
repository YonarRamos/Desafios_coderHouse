const Config = require('../utils/config');
const twilio = require('twilio');

class Twilio {
  constructor() {
    this.twilio = twilio(Config.TWILIO_ACCOUNT_ID, Config.TWILIO_TOKEN);
  }

  async sendMessage(cellphoneNumber, message) {
    const params = {
      body: message,
      from: Config.TWILIO_CELLPHONE,
      to: cellphoneNumber,
    };

    const response = await this.twilio.messages.create(params);
    return response;
  }
}

const SmsService = new Twilio();
module.exports = SmsService;