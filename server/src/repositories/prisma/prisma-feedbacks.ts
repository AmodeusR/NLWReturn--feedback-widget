import { prisma } from "../../prisma";
import { FeedbackDataTemplate, FeedbacksRepository } from "./../feedbacks";

export class PrismaFeedbacks implements FeedbacksRepository {
  async create({type, comment, screenshot}: FeedbackDataTemplate) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    });
    
  };
}