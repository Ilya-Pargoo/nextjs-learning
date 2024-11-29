import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '@/constants/variables';

sgMail.setApiKey(SENDGRID_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { path, ...params } = req.query;
  const { body } = req;

  const subject = `New Contact Form Submission from ${body.name} ${body.surname}`;

  const text = `
    Name: ${body.name} ${body.surname}
    Email: ${body.email}
    Address: ${body.address}
    Birthday: ${body.birthday}
  `;

  const html = `
    <strong>Name:</strong> ${body.name} ${body.surname} <br/>
    <strong>Email:</strong> ${body.email} <br/>
    <strong>Address:</strong> ${body.address} <br/>
    <strong>Birthday:</strong> ${body.birthday}
  `;

  const msg = {
    to: 'test@example.com',
    from: 'test@example.com',
    subject: subject,
    text: text,
    html: html,
  };

  const sendEmail = async (retries: number) => {
    try {
      await sgMail.send(msg);
      console.log('Email sent');
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      if (retries > 0) {
        console.error('Failed to send email, retrying...', retries);
        setTimeout(() => sendEmail(retries - 1), 1000);
      } else {
        console.error('Failed to send email after retries', error);
        res.status(500).json({ error: 'Failed to send email' });
      }
    }
  };

  sendEmail(3);
}
