import { PrismaFeedbacks } from "./repositories/prisma/prisma-feedbacks";
import { SubmitFeedback } from "./services/submit-feedback";
import express from "express";
import nodemailer from "nodemailer";

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0e3a30c118d8ed",
    pass: "5f725f94bd4ac6"
  }
});

routes.use(express.json());

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;
  
  const prismaFeedbacks = new PrismaFeedbacks();
  const submitFeedback = new SubmitFeedback(prismaFeedbacks);

  submitFeedback.execute({
    type,
    comment,
    screenshot
  });
  
  // await transport.sendMail({
  //   from: "Equipe Feedback <devteste@feedget.com>",
  //   to: "Amodeus R. <RichardGSullivan@hotmail.com>",
  //   subject: "Você recebeu um novo Feedback",
  //   html: [
  //     `<p>Tipo do feedback: ${type}</p>`,
  //     `<p>Commentário do feedback: ${comment}</p>`,
  //   ].join("\n")
  // });
  
  return res.status(201).send();
});