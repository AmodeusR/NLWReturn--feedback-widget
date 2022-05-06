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
      ].join("\n")
    })
  };
}
