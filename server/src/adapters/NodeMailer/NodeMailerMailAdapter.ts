import nodemailer from "nodemailer";
import { MailAdapter } from "../mail-adapter";

interface NodeMailerDT {
  subject: string,
  body: string
}

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0e3a30c118d8ed",
    pass: "5f725f94bd4ac6"
  }
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: NodeMailerDT) {
    await transport.sendMail({
      from: "Equipe Feedback <devteste@feedget.com>",
      to: "Amodeus R. <RichardGSullivan@hotmail.com>",
      subject,
      html: body
    });
  
  };
}

