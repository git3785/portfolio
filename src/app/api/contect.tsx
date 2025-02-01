import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Your API or email service code goes here, for example using EmailJS or SendGrid
    try {
      // Example: Sending email using EmailJS or other services
      const response = await fetch('https://api.emailservice.com/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_API_KEY', // Add API key or auth token
        },
        body: JSON.stringify({
          to: 'youremail@example.com',  // Your email address
          subject: 'New Contact Form Submission',
          message: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Email sending failed');
      }

      return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
