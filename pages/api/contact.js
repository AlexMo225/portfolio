import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    console.log('Received data:', { name, email, message });
    console.log('Email user:', process.env.EMAIL_USER);
    console.log('Email pass:', process.env.EMAIL_PASS);
    console.log('SMTP host:', process.env.SMTP_HOST);
    console.log('SMTP port:', process.env.SMTP_PORT);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    try {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong><br>${message}</p>`,
      });

      res.status(200).json({ message: 'Message reçu avec succès' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
} 