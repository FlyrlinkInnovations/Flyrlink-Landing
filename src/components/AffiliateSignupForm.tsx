'use client';

import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

export default function AffiliateSignupForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    profileUrl: '',
    platforms: '',
    socialUrls: '',
    contentType: '',
    targetAudience: '',
    agreeTerms: false,
    agreeNoMisleading: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreeTerms || !formData.agreeNoMisleading) {
      toast({ title: 'Error', description: 'Please agree to both terms to continue.', variant: 'destructive' });
      return;
    }

    setIsLoading(true);
    try {
      // Simulate submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      toast({ title: 'Application Submitted!', description: 'We will review your application and get back to you within 48 hours.' });
    } catch {
      toast({ title: 'Error', description: 'Something went wrong. Please try again.', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl border border-gray-200/80 px-8">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="font-display text-2xl font-bold text-navy-900 mb-3">Application Received!</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Thank you for your interest in the Flyrlink Affiliate Program. Our team will review your application and reach out within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200/80 p-8 space-y-6">
      <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">Apply to Join</h3>
      <p className="text-gray-600 mb-6">Fill out the form below and our team will get back to you.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-transparent" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-transparent" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-transparent" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-transparent" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Flyrlink Profile URL (if any)</label>
        <input type="url" name="profileUrl" value={formData.profileUrl} onChange={handleChange} placeholder="https://app.flyrlink.com/profile/..." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-transparent" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">How will you promote Flyrlink? *</label>
        <textarea name="platforms" value={formData.platforms} onChange={handleChange} required rows={2} placeholder="e.g., YouTube, Instagram, blog, email newsletter, community groups..." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-transparent resize-none" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Social Media / Website URLs</label>
        <textarea name="socialUrls" value={formData.socialUrls} onChange={handleChange} rows={2} placeholder="Links to your social profiles or website" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-transparent resize-none" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content Type *</label>
          <select name="contentType" value={formData.contentType} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-transparent">
            <option value="">Select...</option>
            <option value="video">Video Content</option>
            <option value="blog">Blog/Articles</option>
            <option value="social">Social Media Posts</option>
            <option value="email">Email Marketing</option>
            <option value="community">Community/Forum</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Target Audience *</label>
          <input type="text" name="targetAudience" value={formData.targetAudience} onChange={handleChange} required placeholder="e.g., entrepreneurs, students, professionals..." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-transparent" />
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-gray-100">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} className="mt-1" />
          <span className="text-sm text-gray-700">I agree to the Flyrlink Affiliate Program terms and conditions, including the 5% commission structure and 12-month referral window. *</span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" name="agreeNoMisleading" checked={formData.agreeNoMisleading} onChange={handleChange} className="mt-1" />
          <span className="text-sm text-gray-700">I confirm that I will not use misleading or deceptive advertising practices to promote Flyrlink. *</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-brand hover:bg-brand-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</> : 'Submit Application'}
      </button>
    </form>
  );
}
