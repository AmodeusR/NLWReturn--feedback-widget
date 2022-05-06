export interface MailAdapterDT {
  subject: string,
  body: string
}

export interface MailAdapter {
  sendMail: (data: MailAdapterDT) => Promise<void>;
}

