export interface FeedbackDataTemplate {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create: (data: FeedbackDataTemplate) => Promise<void>;
}