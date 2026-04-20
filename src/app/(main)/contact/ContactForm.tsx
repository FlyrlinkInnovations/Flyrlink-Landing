'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm md:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <Field
            id="name"
            label="Full Name"
            type="text"
            placeholder="Jane Doe"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
          <Field
            id="email"
            label="Email Address"
            type="email"
            placeholder="jane@company.com"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
        </div>

        <Field
          id="subject"
          label="Subject"
          type="text"
          placeholder="How can we help?"
          value={formData.subject}
          onChange={handleChange}
          disabled={isSubmitting}
          required
        />

        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="block text-[11px] font-semibold tracking-[0.22em] text-gray-500"
          >
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your inquiry..."
            required
            disabled={isSubmitting}
            rows={5}
            className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-gray-400 transition-colors focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        {submitStatus === 'success' && (
          <div className="flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
            <div>
              <p className="text-sm font-semibold text-green-800">
                Message sent.
              </p>
              <p className="text-xs text-green-700">
                We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4">
            <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
            <div>
              <p className="text-sm font-semibold text-red-800">
                Something went wrong.
              </p>
              <p className="text-xs text-red-700">
                Please try again or email us directly.
              </p>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between gap-4 pt-2">
          <p className="text-[11px] text-gray-500">
            By sending, you agree to our{' '}
            <a href="/privacy" className="text-brand hover:underline">
              Privacy Policy
            </a>
            .
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-xl shadow-navy-900/20 transition-all duration-300 hover:bg-navy-800 hover:shadow-brand/20 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-navy-900 transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-3 w-3" />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

type FieldProps = {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
};

function Field({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  disabled,
  required,
}: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-[11px] font-semibold tracking-[0.22em] text-gray-500"
      >
        {label.toUpperCase()}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className="w-full rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder:text-gray-400 transition-colors focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10 disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
}
