import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { PROXIED_API_URL } from '../config';

export const EnhancedWaitingListForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const navigate = useNavigate();

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
      
      // Prepare payload according to the exact format required
      const payload = {
        values: {
          "Full Name": formData.name,
          "Email": formData.email,
          "Role or Interest": formData.role
        }
      };
      
      console.log('Sending payload:', JSON.stringify(payload));
      
      const response = await fetch(PROXIED_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
      });
      
      // Detailed error handling
      if (!response.ok) {
        let errorMessage = `Error: ${response.status} ${response.statusText}`;
        try {
          const errorData = await response.json();
          console.error('API Error Response:', errorData);
          errorMessage = errorData.message || errorMessage;
        } catch (parseError) {
          console.error('Error parsing API response:', parseError);
          const textResponse = await response.text().catch(() => 'Unable to get response text');
          console.error('Raw response:', textResponse);
        }
        throw new Error(errorMessage);
      }
      
      // Log successful response
      try {
        const responseData = await response.json();
        console.log('API Success Response:', responseData);
      } catch (parseError) {
        console.log('Success response received but could not parse JSON');
      }
      
      // Clear form on success
      setFormData({ name: '', email: '', role: '' });
      // Set submitted state to true to show thank you message
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('❌ Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  // Effect to handle countdown and redirect
  useEffect(() => {
    if (isSubmitted) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            navigate('/');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isSubmitted, navigate]);

  // Show thank you message if submitted
  if (isSubmitted) {
    return (
      <div className="text-center py-10 space-y-6">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-blue-600">Thank you for joining our waiting list!</h2>
        <p className="text-gray-600 text-lg">We're excited to have you on board. We'll be in touch soon!</p>
        <p className="text-gray-500">Redirecting to home page in <span className="font-bold">{countdown}</span> seconds...</p>
        <button 
          onClick={() => navigate('/')} 
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Go to Home Page Now
        </button>
      </div>
    );
  }

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
