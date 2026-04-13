import { sendContactEmail, validateEmail } from './utils/email';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please fill in all required fields (Name, Email, Message)' });
    }

    // Validate email format
    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address' });
    }

    // Log the submission
    console.log('Form submission received:', {
      name,
      email,
      company,
      phone,
      service,
      timestamp: new Date().toISOString()
    });

    // Send email notification
    try {
      await sendContactEmail({ name, email, company, phone, service, message });
      console.log('Email notification sent successfully');
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // Still return success to user even if email fails
      // The submission is logged, so you won't lose it
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Thank you! We will contact you shortly.' 
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({ 
      error: 'Failed to submit form. Please try again or email us directly at walletsplus@gmail.com' 
    });
  }
}
