import nodemailer from 'nodemailer';

// Gmail SMTP configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendContactEmail(formData) {
  const { name, email, company, phone, service, message } = formData;

  const emailContent = `
New Contact Form Submission from Maharya Landing Page

═══════════════════════════════════════
CONTACT DETAILS
═══════════════════════════════════════

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}
Service Interest: ${service || 'Not specified'}

═══════════════════════════════════════
MESSAGE
═══════════════════════════════════════

${message}

═══════════════════════════════════════
SUBMISSION INFO
═══════════════════════════════════════

Submitted: ${new Date().toLocaleString('en-US', { 
  dateStyle: 'full', 
  timeStyle: 'long',
  timeZone: 'Asia/Kolkata'
})}
Source: landing.maharya.com
IP: [Logged on server]

═══════════════════════════════════════

Reply to this inquiry: ${email}
  `.trim();

  const mailOptions = {
    from: `"Maharya Landing Page" <${process.env.GMAIL_USER}>`,
    to: process.env.NOTIFICATION_EMAIL || process.env.GMAIL_USER,
    replyTo: email,
    subject: `🔔 New Contact Form Submission - ${name}`,
    text: emailContent,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #7b3f00; margin-top: 0;">New Contact Form Submission</h2>
          <p style="color: #666; font-size: 14px;">Received from landing.maharya.com</p>
          
          <div style="background-color: #fafaf9; padding: 20px; border-left: 4px solid #7b3f00; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold; width: 150px;">Name:</td>
                <td style="padding: 8px 0; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #7b3f00;">${email}</a></td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Company:</td>
                <td style="padding: 8px 0; color: #333;">${company}</td>
              </tr>
              ` : ''}
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0; color: #333;"><a href="tel:${phone}" style="color: #7b3f00;">${phone}</a></td>
              </tr>
              ` : ''}
              ${service ? `
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Service Interest:</td>
                <td style="padding: 8px 0; color: #333;">${service}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          <div style="background-color: #fafaf9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message</h3>
            <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="color: #999; font-size: 12px; margin: 5px 0;">
              Submitted: ${new Date().toLocaleString('en-US', { 
                dateStyle: 'full', 
                timeStyle: 'long',
                timeZone: 'Asia/Kolkata'
              })}
            </p>
            <p style="color: #999; font-size: 12px; margin: 5px 0;">Source: landing.maharya.com</p>
          </div>

          <div style="margin-top: 20px; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; background-color: #7b3f00; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reply to Inquiry</a>
          </div>
        </div>

        <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
          <p>© 2026 Maharya Inc. | Sustainable Leather Accessories Manufacturing</p>
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send email notification');
  }
}

export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
