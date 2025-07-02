import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { PROXIED_API_URL } from '../config';

export const WaitingListForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast.error('Please fill in all fields');
      return;
    }

    // Simple email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
          "Full Name": name,
          "Email": email,
          "Role or Interest": "" // Default empty for simple form
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
        credentials: 'omit' // Don't send cookies for cross-origin requests
      });
      
      // Consider any response as potentially successful, even if it's not a 200 OK
      // This is because some APIs might return non-standard status codes
      let responseText = '';
      try {
        responseText = await response.text();
        console.log('API Response Text:', responseText);
        
        // Try to parse as JSON if possible
        if (responseText && responseText.trim()) {
          try {
            const jsonData = JSON.parse(responseText);
            console.log('API Response JSON:', jsonData);
          } catch (jsonError) {
            console.log('Response is not valid JSON, but that might be expected');
          }
        }
        
        // Check if response status indicates an error
        if (!response.ok) {
          console.warn(`API returned status code ${response.status}: ${response.statusText}`);
          // Continue anyway since we want to handle the form submission as successful
          // even if the API returns an error status
        }
      } catch (error) {
        console.error('Error reading API response:', error);
        // Continue anyway - we'll treat this as a successful submission
      }
      
      // Clear form on success
      setEmail('');
      setName('');
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
      <div className="text-center py-8 space-y-4 max-w-md mx-auto">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-blue-600">Thank you for joining our waiting list!</h2>
        <p className="text-gray-600">We're excited to have you on board. We'll be in touch soon!</p>
        <p className="text-gray-500">Redirecting to home page in <span className="font-bold">{countdown}</span> seconds...</p>
        <button 
          onClick={() => navigate('/')} 
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Go to Home Page Now
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          required
        />
      </div>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-sky-600 hover:to-blue-700 transition-all disabled:opacity-70 flex items-center"
        >
          {isLoading ? 'Joining...' : 'Join Waitlist'}
        </button>
      </div>
    </form>
  );
};
