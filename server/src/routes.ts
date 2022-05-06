import { NodeMailerMailAdapter } from "./adapters/NodeMailer/NodeMailerMailAdapter";
import { PrismaFeedbacks } from "./repositories/prisma/prisma-feedbacks";
import { SubmitFeedback } from "./services/submit-feedback";
import express from "express";
import nodemailer from "nodemailer";

export const routes = express.Router();



routes.use(express.json());

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;
  
  const prismaFeedbacks = new PrismaFeedbacks();
  const mailAdapter = new NodeMailerMailAdapter();
  const submitFeedback = new SubmitFeedback(prismaFeedbacks, mailAdapter);

  submitFeedback.execute({
    type,
    comment,
    screenshot
  });
  
  return res.status(201).send();
});