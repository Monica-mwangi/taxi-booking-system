import React, { useState } from 'react';
import { Car, MapPin, Clock, Phone, Mail, ChevronRight, Star, Shield, Clock3 } from 'lucide-react';

type BookingDetails = {
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  passengers: number;
};

function App() {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: 1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', bookingDetails);
    alert('Booking submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">Your Premium Taxi Service</h1>
              <p className="text-xl mb-8">Experience comfort and reliability with our professional taxi service. Book your ride in seconds.</p>
              <a href="#booking" className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 inline-flex items-center">
                Book Now <ChevronRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-yellow-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Service</h3>
              <p className="text-gray-600">Experience luxury and comfort with our premium fleet of vehicles</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-yellow-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">Professional drivers and regularly maintained vehicles for your safety</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock3 className="text-yellow-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Available round the clock for your convenience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div id="booking" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Book Your Ride</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Enter pickup location"
                      value={bookingDetails.pickup}
                      onChange={(e) => setBookingDetails({...bookingDetails, pickup: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Drop-off Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Enter drop-off location"
                      value={bookingDetails.dropoff}
                      onChange={(e) => setBookingDetails({...bookingDetails, dropoff: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="date"
                      className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      value={bookingDetails.date}
                      onChange={(e) => setBookingDetails({...bookingDetails, date: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="time"
                      className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      value={bookingDetails.time}
                      onChange={(e) => setBookingDetails({...bookingDetails, time: e.target.value})}
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Passengers</label>
                <div className="relative">
                  <Car className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="number"
                    min="1"
                    max="4"
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    value={bookingDetails.passengers}
                    onChange={(e) => setBookingDetails({...bookingDetails, passengers: parseInt(e.target.value)})}
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="mr-3" size={20} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3" size={20} />
                  <span>booking@taxiservice.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <p className="mb-2">Monday - Friday: 24 hours</p>
              <p className="mb-2">Saturday: 24 hours</p>
              <p>Sunday: 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;