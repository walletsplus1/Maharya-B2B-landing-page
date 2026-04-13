export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Here you can:
    // 1. Send email using a service
    // 2. Save to database
    // 3. Forward to your email

    // For now, we'll log it and send a success response
    console.log('Form submission received:', {
      name,
      email,
      company,
      phone,
      service,
      message,
      timestamp: new Date().toISOString()
    });

    // Send email notification using Vercel's email integration
    // You'll need to set up email in Vercel dashboard

    return res.status(200).json({ 
      success: true, 
      message: 'Thank you! We will contact you shortly.' 
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({ error: 'Failed to submit form' });
  }
}
