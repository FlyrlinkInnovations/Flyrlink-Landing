import React, { useState, memo } from 'react';
import { User, Mail, Phone, Building, MessageSquare, Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { calendarService, BookingData } from '../../services/calendar';
import { format } from 'date-fns';
import { useToast } from '../ui/use-toast';

interface BookingFormProps {
  selectedDate: Date;
  selectedTime: string;
  timezone: string;
  onSuccess?: () => void;
}

const BookingForm = memo(({ selectedDate, selectedTime, timezone, onSuccess }: BookingFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (formData.phone && !/^[\d\s+()-]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const bookingData: BookingData = {
        ...formData,
        date: format(selectedDate, 'yyyy-MM-dd'),
        time: selectedTime,
        timezone
      };

      await calendarService.bookAppointment(bookingData);
      
      setSuccess(true);
      toast({
        title: "Meeting Scheduled!",
        description: `Your meeting has been scheduled for ${format(selectedDate, 'MMMM d, yyyy')} at ${selectedTime}`,
      });

      if (onSuccess) {
        setTimeout(onSuccess, 2000);
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      toast({
        title: "Booking Failed",
        description: "Unable to schedule your meeting. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (timeStr: string) => {
    try {
      const [hours, minutes] = timeStr.split(':');
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const hour12 = hour % 12 || 12;
      return `${hour12}:${minutes} ${ampm}`;
    } catch {
      return timeStr;
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">You're all set!</h3>
          <p className="text-gray-600 mb-6">
            We've sent a confirmation to {formData.email}
          </p>
          <div className="bg-gray-50 rounded-xl p-4 text-left max-w-sm mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-900 font-medium">
                {format(selectedDate, 'EEEE, MMMM d, yyyy')}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-900 font-medium">
                {formatTime(selectedTime)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-2">Your information</h3>
      <p className="text-sm text-gray-500 mb-6">Please provide your details to confirm the booking</p>
      
      <div className="bg-blue-50 rounded-xl p-3 mb-6 flex items-center gap-3">
        <div className="flex items-center gap-3 text-sm">
          <Calendar className="w-4 h-4 text-blue-600" />
          <span className="text-gray-700">{format(selectedDate, 'MMM d')}</span>
        </div>
        <div className="w-px h-4 bg-blue-200"></div>
        <div className="flex items-center gap-3 text-sm">
          <Clock className="w-4 h-4 text-blue-600" />
          <span className="text-gray-700">{formatTime(selectedTime)}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.name ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="John Doe"
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.phone ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Acme Inc."
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            What would you like to discuss?
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 px-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
            loading
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md'
          }`}
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-gray-500"></div>
              <span>Scheduling...</span>
            </>
          ) : (
            <>
              <span>Schedule Meeting</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
});

BookingForm.displayName = 'BookingForm';

export default BookingForm;