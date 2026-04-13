// Email notification function for Vercel
// This uses Vercel's email service or you can use SendGrid, Resend, etc.

export async function sendContactEmail(formData) {
  const { name, email, company, phone, service, message } = formData;

  // Email content
  const emailContent = `
New Contact Form Submission from Maharya Landing Page

-----------------------------------
Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}
Service Interest: ${service || 'Not specified'}
-----------------------------------

Message:
${message}

-----------------------------------
Submitted at: ${new Date().toLocaleString()}
From: landing.maharya.com
  `.trim();

  // For now, we'll log it
  // You'll need to integrate with an email service
  console.log('Email to send:', emailContent);

  // TODO: Integrate with email service
  // Options:
  // 1. Vercel Email (coming soon)
  // 2. SendGrid (free tier: 100 emails/day)
  // 3. Resend (free tier: 3,000 emails/month)
  // 4. AWS SES
  
  return {
    success: true,
    message: 'Email logged (integrate email service for actual sending)'
  };
}

// Simple email validation
export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
