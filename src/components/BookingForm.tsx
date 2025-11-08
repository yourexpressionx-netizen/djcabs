'use client';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { VEHICLE_TYPES, type VehicleType } from '@/types';

interface BookingFormData {
  fullName: string;
  phone: string;
  pickupLocation: string;
  dropLocation: string;
  pickupDate: string;
  pickupTime: string;
  passengers: number;
  vehicleType: VehicleType;
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
  vehicleType: 'SEDAN',
  message: '',
};

const WHATSAPP_NUMBER = '+917407616130';
const BOOKING_EMAIL = 'darjeelingcabs.com@gmail.com';

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) || 1 : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const selectedVehicle = VEHICLE_TYPES[formData.vehicleType];
    const messageText = `
Booking Request:
Name: ${formData.fullName}
Phone: ${formData.phone}
From: ${formData.pickupLocation}
To: ${formData.dropLocation}
Date: ${formData.pickupDate}
Time: ${formData.pickupTime}
Passengers: ${formData.passengers}
Vehicle: ${selectedVehicle.name} (${selectedVehicle.capacity})
Additional Notes: ${formData.message}
    `.trim();

    // Create WhatsApp link
    const whatsappText = encodeURIComponent(messageText);
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

    // Create mailto link
    const emailSubject = encodeURIComponent(
      `Cab Booking Request from ${formData.fullName}`
    );
    const emailBody = encodeURIComponent(messageText);
    const emailLink = `mailto:${BOOKING_EMAIL}?subject=${emailSubject}&body=${emailBody}`;

    // Open WhatsApp in new tab
    window.open(whatsappLink, '_blank');

    // Open email client
    window.location.href = emailLink;

    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-gradient-to-br from-white/95 via-white/90 to-blue-50/95 backdrop-blur-md rounded-xl shadow-2xl space-y-8 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]"
      >
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-3">Book Your Ride</h3>
          <p className="text-gray-700 text-lg">Get an instant quote for your journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-bold text-gray-800 mb-2">
              Full Name <span className="text-blue-600">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              placeholder="Enter your full name"
              className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white shadow-sm focus:border-blue-600 focus:ring-blue-600 transition-all duration-200 text-gray-900 font-medium"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number <span className="text-blue-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Enter your phone number"
              className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-200 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:bg-white transition-colors duration-200"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="pickupLocation" className="block text-sm font-semibold text-gray-700 mb-2">
              Pickup Location <span className="text-blue-600">*</span>
            </label>
            <input
              type="text"
              id="pickupLocation"
              name="pickupLocation"
              required
              placeholder="e.g., Bagdogra Airport"
              className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-200 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:bg-white transition-colors duration-200"
              value={formData.pickupLocation}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="dropLocation" className="block text-sm font-semibold text-gray-700 mb-2">
              Drop Location <span className="text-blue-600">*</span>
            </label>
            <input
              type="text"
              id="dropLocation"
              name="dropLocation"
              required
              placeholder="e.g., Darjeeling Mall Road"
              className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-200 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:bg-white transition-colors duration-200"
              value={formData.dropLocation}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="pickupDate" className="block text-sm font-semibold text-gray-700 mb-2">
              Pickup Date <span className="text-blue-600">*</span>
            </label>
            <input
              type="date"
              id="pickupDate"
              name="pickupDate"
              required
              min={new Date().toISOString().split('T')[0]}
              className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-200 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:bg-white transition-colors duration-200"
              value={formData.pickupDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="pickupTime" className="block text-sm font-semibold text-gray-700 mb-2">
              Pickup Time <span className="text-blue-600">*</span>
            </label>
            <input
              type="time"
              id="pickupTime"
              name="pickupTime"
              required
              className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-200 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:bg-white transition-colors duration-200"
              value={formData.pickupTime}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="vehicleType" className="block text-sm font-semibold text-gray-700 mb-2">
              Vehicle Type <span className="text-blue-600">*</span>
            </label>
            <select
              id="vehicleType"
              name="vehicleType"
              required
              className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-200 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:bg-white transition-colors duration-200"
              value={formData.vehicleType}
              onChange={handleInputChange}
            >
              {Object.values(VEHICLE_TYPES).map((vehicle) => (
                <option key={vehicle.id} value={vehicle.id.toUpperCase()}>
                  {vehicle.name} - {vehicle.capacity} - From ₹{vehicle.basePrice}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="passengers" className="block text-sm font-semibold text-gray-700 mb-2">
              Number of Passengers <span className="text-blue-600">*</span>
            </label>
            <input
              type="number"
              id="passengers"
              name="passengers"
              required
              min={1}
              max={16}
              className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-200 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:bg-white transition-colors duration-200"
              value={formData.passengers}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Additional Requirements
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-200 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:bg-white transition-colors duration-200"
            placeholder="Any special requests or requirements?"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-4">
          <p className="text-sm text-gray-600">Fields marked with <span className="text-blue-600">*</span> are required</p>
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl font-bold text-lg"
          >
            Book Now
          </button>
        </div>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-6 bg-green-50 text-green-800 rounded-lg border border-green-100 shadow-sm"
          >
            <p>Thank you for your booking request! We will contact you shortly.</p>
            <p className="text-sm mt-2">If nothing opens automatically, please check your popup blocker settings.</p>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}