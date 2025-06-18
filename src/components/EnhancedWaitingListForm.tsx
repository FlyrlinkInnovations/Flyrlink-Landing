import { useState } from 'react';
import { toast } from 'react-toastify';
import { GOOGLE_SCRIPT_URL } from '../config';

export const EnhancedWaitingListForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.name || !formData.role) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Simple email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    try {
      // Show loading state
      toast.info('Submitting your information...');
      
      // Send data to Google Apps Script
      if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
        throw new Error('Google Script URL not configured');
      }
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          role: formData.role
        }),
      });
      
      // Parse the response
      const data = await response.json();
      
      if (data.result === 'success') {
        toast.success('🎉 Thanks for joining our waiting list!');
        // Clear form on success
        setFormData({ name: '', email: '', role: '' });
      } else {
        throw new Error(data.message || 'Failed to submit');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('❌ Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Your Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Let us know who you are!"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Your Email*
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="We'll keep you informed. No spam, promise."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Your Role or Interest*
        </label>
        <textarea
          name="role"
          value={formData.role}
          onChange={handleChange}
          rows={3}
          placeholder="Are you a student, coach, freelancer, or startup? Tell us how you'd like to use Flyrlink."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          required
        />
      </div>
      
      <button 
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-400/25 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};
