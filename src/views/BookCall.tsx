import React, { useState, useEffect } from 'react';
import { ArrowLeft, Globe, Video, Users, Sparkles, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import CalendarView from '../components/Calendar/CalendarView';
import TimeSlotPicker from '../components/Calendar/TimeSlotPicker';
import BookingForm from '../components/Calendar/BookingForm';

const BookCall: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<'date' | 'time' | 'form'>('date');
  const [timezone, setTimezone] = useState('America/Chicago');

  useEffect(() => {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(userTimezone);
  }, []);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setCurrentStep('time');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setCurrentStep('form');
  };

  const handleBookingSuccess = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setCurrentStep('date');
  };

  const handleBack = () => {
    if (currentStep === 'form') {
      setCurrentStep('time');
    } else if (currentStep === 'time') {
      setCurrentStep('date');
    }
  };

  const timezones = [
    { value: 'America/New_York', label: 'Eastern Time' },
    { value: 'America/Chicago', label: 'Central Time' },
    { value: 'America/Denver', label: 'Mountain Time' },
    { value: 'America/Los_Angeles', label: 'Pacific Time' },
    { value: 'Europe/London', label: 'London' },
    { value: 'Europe/Paris', label: 'Paris' },
    { value: 'Asia/Tokyo', label: 'Tokyo' },
    { value: 'Asia/Shanghai', label: 'Shanghai' },
    { value: 'Australia/Sydney', label: 'Sydney' },
  ];

  const steps = [
    { id: 'date', label: 'Date', icon: '📅' },
    { id: 'time', label: 'Time', icon: '⏰' },
    { id: 'form', label: 'Details', icon: '✍️' },
  ];

  const currentStepIndex = steps.findIndex(s => s.id === currentStep);

  const bookingSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Flyrlink Expert Consultation",
    "description": "30-minute personalized demo and consultation with Flyrlink experts",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "VirtualLocation",
      "url": "https://flyrlink.com/book-call"
    },
    "organizer": {
      "@type": "Organization",
      "name": "Flyrlink",
      "url": "https://flyrlink.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://flyrlink.com/book-call"
    }
  };

  return (
    <>
      <SEO 
        title="Book a Call - Schedule Your Free Expert Consultation | Flyrlink"
        description="Schedule a free 30-minute consultation with Flyrlink experts. Learn how our AI-powered platform can connect you with verified industry experts instantly. Book your demo today!"
        keywords="book consultation, schedule demo, expert consultation, AI platform demo, Flyrlink meeting, free consultation, expert network demo, schedule call"
        jsonLd={bookingSchema}
        canonical="https://flyrlink.com/book-call"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            Back
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-3">
              Book a Meeting
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Schedule a 30-minute call to discover how Flyrlink can transform your expert network
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6 bg-white rounded-2xl border border-gray-100 p-4">
                <div className="flex items-center gap-1">
                  <Globe className="w-4 h-4 text-gray-500 mr-2" />
                  <select
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="text-sm border-0 focus:ring-0 text-gray-700 font-medium cursor-pointer"
                  >
                    {timezones.map((tz) => (
                      <option key={tz.value} value={tz.value}>
                        {tz.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center gap-3">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                      <div className={`flex items-center gap-2 ${
                        index <= currentStepIndex ? 'text-gray-900' : 'text-gray-400'
                      }`}>
                        <span className="text-lg">{step.icon}</span>
                        <span className="text-sm font-medium hidden sm:inline">{step.label}</span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`w-8 h-0.5 mx-2 ${
                          index < currentStepIndex ? 'bg-blue-600' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                {currentStep !== 'date' && (
                  <button
                    onClick={handleBack}
                    className="absolute -top-12 left-0 text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back
                  </button>
                )}

                <div className="transition-all duration-300">
                  {currentStep === 'date' && (
                    <CalendarView
                      onDateSelect={handleDateSelect}
                      selectedDate={selectedDate}
                      timezone={timezone}
                    />
                  )}

                  {currentStep === 'time' && selectedDate && (
                    <TimeSlotPicker
                      selectedDate={selectedDate}
                      onTimeSelect={handleTimeSelect}
                      selectedTime={selectedTime}
                      timezone={timezone}
                    />
                  )}

                  {currentStep === 'form' && selectedDate && selectedTime && (
                    <BookingForm
                      selectedDate={selectedDate}
                      selectedTime={selectedTime}
                      timezone={timezone}
                      onSuccess={handleBookingSuccess}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-4">
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <h3 className="text-base font-medium text-gray-900 mb-4">What we'll cover</h3>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-700">Platform walkthrough & demo</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-700">AI-powered expert matching</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-700">Custom solutions for your needs</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-700">Pricing & implementation timeline</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-5 border border-blue-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                    <h3 className="text-base font-medium text-gray-900">Meeting Details</h3>
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Video className="w-4 h-4" />
                      <span>30-minute video call</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>Meet with our expert team</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    Need help? Email us at{' '}
                    <a href="mailto:support@flyrlink.com" className="text-blue-600 hover:underline">
                      support@flyrlink.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCall;