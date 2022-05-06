import { FeedbacksRepository } from "./../repositories/feedbacks";
export interface SubmitFeedbackTemplate {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedback {
  constructor (
    private feedbacksRepository: FeedbacksRepository
  ) {}
  
  async execute({ type, comment, screenshot }: SubmitFeedbackTemplate) {
    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot      
    });
  };
}
