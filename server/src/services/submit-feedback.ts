import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "./../repositories/feedbacks";
export interface SubmitFeedbackTemplate {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedback {
  constructor (
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}
  
  async execute({ type, comment, screenshot }: SubmitFeedbackTemplate) {

    if (!type) {
      throw new Error("Neither type or comment shouldn't be empty. Check type.");
    } else if (!comment) {
      throw new Error("Neither type or comment shouldn't be empty. Check comment.");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid image format");
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot      
    });

    await this.mailAdapter.sendMail({
      subject: "Novo feedback",
      body: [
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Commentário do feedback: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}" alt="user's website screenshot" />` : ""
      ].join("\n")
    })
  };
}
