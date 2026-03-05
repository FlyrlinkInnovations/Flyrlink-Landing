'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Globe, Video, Users, Sparkles, Check } from 'lucide-react';
import CalendarView from '@/components/Calendar/CalendarView';
import TimeSlotPicker from '@/components/Calendar/TimeSlotPicker';
import BookingForm from '@/components/Calendar/BookingForm';

const timezones = [
  { value: 'America/New_York', label: 'Eastern Time' },
  { value: 'America/Chicago', label: 'Central Time' },
  { value: 'America/Denver', label: 'Mountain Time' },
  { value: 'America/Los_Angeles', label: 'Pacific Time' },
  { value: 'Europe/London', label: 'London' },
  { value: 'Europe/Paris', label: 'Paris' },
  { value: 'Asia/Kolkata', label: 'India (IST)' },
  { value: 'Asia/Tokyo', label: 'Tokyo' },
  { value: 'Australia/Sydney', label: 'Sydney' },
];

const steps = [
  { id: 'date', label: 'Date', step: 1 },
  { id: 'time', label: 'Time', step: 2 },
  { id: 'form', label: 'Details', step: 3 },
];

export default function BookCallPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<'date' | 'time' | 'form'>('date');
  const [timezone, setTimezone] = useState('America/Chicago');

  useEffect(() => {
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
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
    if (currentStep === 'form') setCurrentStep('time');
    else if (currentStep === 'time') setCurrentStep('date');
  };

  const currentStepIndex = steps.findIndex((s) => s.id === currentStep);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-navy-900 mb-6 text-sm transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Back
        </Link>

        <div className="text-center mb-8">
          <h1 className="font-display text-3xl font-semibold text-navy-900 mb-3 tracking-tight">Book a Meeting</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule a 30-minute call to discover how Flyrlink can transform your expert network
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Steps & Timezone */}
            <div className="flex items-center justify-between mb-6 bg-white rounded-2xl border border-gray-200/80 p-4">
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4 text-gray-500 mr-2" />
                <select value={timezone} onChange={(e) => setTimezone(e.target.value)} className="text-sm border-0 focus:ring-0 text-gray-700 font-medium cursor-pointer">
                  {timezones.map((tz) => (
                    <option key={tz.value} value={tz.value}>{tz.label}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-3">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`flex items-center gap-2 ${index <= currentStepIndex ? 'text-navy-900' : 'text-gray-400'}`}>
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${index <= currentStepIndex ? 'bg-brand text-white' : 'bg-gray-200 text-gray-500'}`}>{step.step}</span>
                      <span className="text-sm font-medium hidden sm:inline">{step.label}</span>
                    </div>
                    {index < steps.length - 1 && <div className={`w-8 h-0.5 mx-2 ${index < currentStepIndex ? 'bg-brand' : 'bg-gray-200'}`} />}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {currentStep !== 'date' && (
                <button onClick={handleBack} className="absolute -top-12 left-0 text-sm text-gray-600 hover:text-navy-900 flex items-center gap-1 transition-colors">
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
              )}
              <div className="transition-all duration-300">
                {currentStep === 'date' && <CalendarView onDateSelect={handleDateSelect} selectedDate={selectedDate} timezone={timezone} />}
                {currentStep === 'time' && selectedDate && <TimeSlotPicker selectedDate={selectedDate} onTimeSelect={handleTimeSelect} selectedTime={selectedTime} timezone={timezone} />}
                {currentStep === 'form' && selectedDate && selectedTime && <BookingForm selectedDate={selectedDate} selectedTime={selectedTime} timezone={timezone} onSuccess={handleBookingSuccess} />}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-4">
              <div className="bg-white rounded-2xl border border-gray-200/80 p-5">
                <h3 className="text-base font-medium text-navy-900 mb-4">What we&apos;ll cover</h3>
                <div className="space-y-3">
                  {['Platform walkthrough & demo', 'AI-powered expert matching', 'Custom solutions for your needs', 'Pricing & implementation timeline'].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-brand" />
                      </div>
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand/5 rounded-2xl p-5 border border-brand/10">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-brand" />
                  <h3 className="text-base font-medium text-navy-900">Meeting Details</h3>
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-sm text-gray-600"><Video className="w-4 h-4" /><span>30-minute video call</span></div>
                  <div className="flex items-center gap-2 text-sm text-gray-600"><Users className="w-4 h-4" /><span>Meet with our expert team</span></div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Need help? Email us at{' '}
                  <a href="mailto:support@flyrlink.com" className="text-brand hover:underline">support@flyrlink.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
