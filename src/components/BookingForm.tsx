'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface BookingFormData {
  fullName: string;
  phone: string;
  pickupLocation: string;
  dropLocation: string;
  pickupDate: string;
  pickupTime: string;
  passengers: number;
  vehicleType: string;
  message: string;
}

const initialFormData: BookingFormData = {
  fullName: '',
  phone: '',
  pickupLocation: '',
  dropLocation: '',
  pickupDate: '',
  pickupTime: '',
  passengers: 1,
  vehicleType: 'Sedan',
  message: '',
};

const WHATSAPP_NUMBER = '+917407616130'; // Replace with actual number
const BOOKING_EMAIL = 'darjeelingcabs.com@gmail.com'; // Replace with actual email

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create message text for both WhatsApp and email
    const messageText = `
Booking Request:
Name: ${formData.fullName}
Phone: ${formData.phone}
From: ${formData.pickupLocation}
To: ${formData.dropLocation}
Date: ${formData.pickupDate}
Time: ${formData.pickupTime}
Passengers: ${formData.passengers}
Vehicle: ${formData.vehicleType}
Additional Notes: ${formData.message}
    `.trim();

    // Create WhatsApp link
    const whatsappText = encodeURIComponent(messageText);
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

    // Create mailto link
    const emailSubject = encodeURIComponent(`Cab Booking Request from ${formData.fullName}`);
    const emailBody = encodeURIComponent(messageText);
    const emailLink = `mailto:${BOOKING_EMAIL}?subject=${emailSubject}&body=${emailBody}`;

    // Open WhatsApp in new tab
    window.open(whatsappLink, '_blank');
    
    // Open email client
    window.location.href = emailLink;
    
    setSubmitted(true);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
          <input
            type="text"
            id="fullName"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
        </div>
        {/* Add other form fields following the same pattern */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
          <input
            type="text"
            id="fullName"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone *</label>
          <input
            type="tel"
            id="phone"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700">Pickup Location *</label>
          <input
            type="text"
            id="pickupLocation"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.pickupLocation}
            onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="dropLocation" className="block text-sm font-medium text-gray-700">Drop Location *</label>
          <input
            type="text"
            id="dropLocation"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.dropLocation}
            onChange={(e) => setFormData({ ...formData, dropLocation: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700">Date *</label>
          <input
            type="date"
            id="pickupDate"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.pickupDate}
            onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="pickupTime" className="block text-sm font-medium text-gray-700">Time *</label>
          <input
            type="time"
            id="pickupTime"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.pickupTime}
            onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="passengers" className="block text-sm font-medium text-gray-700">Number of Passengers *</label>
          <input
            type="number"
            id="passengers"
            min="1"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.passengers}
            onChange={(e) => setFormData({ ...formData, passengers: parseInt(e.target.value) })}
          />
        </div>
        <div>
          <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">Vehicle Type *</label>
          <select
            id="vehicleType"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.vehicleType}
            onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
          >
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Innova">Innova</option>
            <option value="Tempo Traveller">Tempo Traveller</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Notes</label>
        <textarea
          id="message"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Send Booking Request
      </button>

      {submitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md"
        >
          <p className="text-green-800">
            Thank you! Opening WhatsApp and email client to send your booking request...
          </p>
          <p className="text-sm text-green-600 mt-2">
            If nothing opens automatically, please check your popup blocker settings.
          </p>
        </motion.div>
      )}
    </motion.form>
  );
}