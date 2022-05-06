import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0e3a30c118d8ed",
    pass: "5f725f94bd4ac6"
  }
});

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;
  
  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  });

  await transport.sendMail({
    from: "Equipe Feedback <devteste@feedget.com>",
    to: "Amodeus R. <RichardGSullivan@hotmail.com>",
    subject: "Você recebeu um novo Feedback",
    html: [
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Commentário do feedback: ${comment}</p>`,
    ].join("\n")
  })
  
  return res.status(201).json({ data: feedback });
})

app.listen("3004", () => {
  console.log("Funcionando");
});