import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const {
      fullName,
      phone,
      email,
      pickupLocation,
      dropLocation,
      pickupDate,
      pickupTime,
      passengers,
      vehicleType,
      serviceType,
      message,
    } = body;

    // Construct email content
    const emailContent = `
      New Booking Request:
      
      Name: ${fullName}
      Phone: ${phone}
      Email: ${email || 'Not provided'}
      
      Pickup: ${pickupLocation}
      Drop: ${dropLocation}
      Date: ${pickupDate}
      Time: ${pickupTime}
      
      Passengers: ${passengers}
      Vehicle Type: ${vehicleType}
      Service Type: ${serviceType}
      
      Additional Message:
      ${message || 'None'}
    `;

    // Send email using SendGrid
    const msg = {
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL || '',
      subject: `New Booking Request from ${fullName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    };

    await sgMail.send(msg);

    return NextResponse.json({
      success: true,
      message: 'Booking request sent successfully'
    });

  } catch (error) {
    console.error('Booking request failed:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process booking request' },
      { status: 500 }
    );
  }
}