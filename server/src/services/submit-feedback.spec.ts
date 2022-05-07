import { SubmitFeedback } from "./submit-feedback";

const submitFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedback(
  { create: submitFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {

    await expect(submitFeedback.execute({
      type: "bug",
      comment: "Teste jest",
      screenshot: "data:image/png;base64.tantofaz.png"
    })).resolves.not.toThrow();

    expect(submitFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should reject a feedback submit by lack of type", async () => {
    await expect(submitFeedback.execute({
      type: "",
      comment: "Teste jest",
      screenshot: "data:image/png;base64.tantofaz.png"
    })).rejects.toThrow();
  });

  it("should reject a feedback submit by lack of comment", async () => {
    await expect(submitFeedback.execute({
      type: "bug",
      comment: "",
      screenshot: "data:image/png;base64.tantofaz.png"
    })).rejects.toThrow();
  });

  it("should reject a feedback submit by incorrect screenshot format", async () => {
    await expect(submitFeedback.execute({
      type: "bug",
      comment: "problemas e mais problemas...",
      screenshot: "tantofaz.png"
    })).rejects.toThrow();
  });
});