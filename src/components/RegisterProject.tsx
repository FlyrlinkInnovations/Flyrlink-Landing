'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Zap, ShieldCheck, Award, MessageSquare, Wallet, LineChart,
  ChevronDown, Check, type LucideIcon,
} from 'lucide-react';

const CATEGORY_OPTIONS = [
  'Education', 'Fitness', 'Tech & IT', 'Photography', 'Beauty', 'Fashion',
  'Business', 'Entertainment', 'Digital Marketing', 'Writing & Translation',
  'Creators & Influencers', 'Other',
];
const TYPE_OPTIONS = ['One-time project', 'Ongoing / Long-term', 'Consultation', 'Workshop / Event'];
const TIMELINE_OPTIONS = ['ASAP', 'Within a week', '1–2 weeks', '1 month', 'Flexible'];

const WHY: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Zap, title: 'Quick Matching', desc: 'Get matched with the right verified experts in minutes, not days.' },
  { icon: ShieldCheck, title: 'Secure Payments', desc: 'Protected payments held safely until you approve the work.' },
  { icon: Award, title: 'Quality Assured', desc: 'Work only with vetted, verified professionals with real reviews.' },
  { icon: MessageSquare, title: 'Direct Communication', desc: 'Chat directly with experts before and during your project.' },
  { icon: Wallet, title: 'Flexible Pricing', desc: 'Set your own budget and receive proposals that fit it.' },
  { icon: LineChart, title: 'Track Progress', desc: 'Monitor milestones and progress in real time, end to end.' },
];

const empty = {
  fullName: '', email: '', phone: '', company: '',
  category: '', type: '', description: '', budget: 50000, timeline: '',
  remote: false, agree: false,
};

export default function RegisterProject() {
  const [form, setForm] = useState({ ...empty });
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string, v: string | boolean | number) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agree) return;
    setSubmitted(true);
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section
        className="px-6 pb-16 pt-28 text-center"
        style={{ backgroundImage: 'linear-gradient(160deg, #2A81D2 0%, #1d6ec0 60%, #0C2738 130%)' }}
      >
        <div className="mx-auto max-w-2xl">
          <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-[-1px] text-white md:text-5xl">
            Register Your Project
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/85 md:text-lg">
            Connect with expert pros who understand your project and deliver.
            Submit your requirements and we&apos;ll find the perfect match.
          </p>
        </div>
      </section>

      {/* Form card */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {/* Banner */}
            <div className="relative aspect-[1104/564] w-full overflow-hidden bg-navy-900">
              <Image
                src="/landing/Project%20registration.png"
                alt="Register your project on Flyrlink"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>

            <div className="p-6 md:p-8">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Check className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-navy-900">Project submitted!</h3>
                  <p className="mx-auto mt-2 max-w-sm text-sm text-gray-600">
                    Thanks, {form.fullName || 'there'}. We&apos;ll match you with
                    verified experts and reach out shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => { setForm({ ...empty }); setSubmitted(false); }}
                    className="mt-6 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-navy-900 hover:bg-gray-50"
                  >
                    Submit another project
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full Name" required>
                      <input required value={form.fullName} onChange={(e) => set('fullName', e.target.value)} placeholder="Enter your full name" className={inputCls} />
                    </Field>
                    <Field label="Email Address" required>
                      <input required type="email" value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="you@email.com" className={inputCls} />
                    </Field>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Phone Number">
                      <input value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="+91 00000 00000" className={inputCls} />
                    </Field>
                    <Field label="Company / Organization">
                      <input value={form.company} onChange={(e) => set('company', e.target.value)} placeholder="Optional" className={inputCls} />
                    </Field>
                  </div>

                  <Field label="Project Category" required>
                    <SelectBox value={form.category} onChange={(v) => set('category', v)} placeholder="Select a category" options={CATEGORY_OPTIONS} />
                  </Field>

                  <Field label="Project Type" required>
                    <SelectBox value={form.type} onChange={(v) => set('type', v)} placeholder="Select project type" options={TYPE_OPTIONS} />
                  </Field>

                  <Field label="Project Description" required>
                    <textarea required value={form.description} onChange={(e) => set('description', e.target.value)} rows={4} placeholder="Describe what you need, goals, and any specifics..." className={`${inputCls} resize-none`} />
                  </Field>

                  <Field label="Budget Range" required>
                    <div className="flex items-center gap-4">
                      <input
                        type="range" min={5000} max={500000} step={5000}
                        value={form.budget}
                        onChange={(e) => set('budget', Number(e.target.value))}
                        className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-gray-200 accent-brand"
                      />
                      <span className="w-28 text-right text-sm font-semibold text-brand">
                        ₹{form.budget.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </Field>

                  <Field label="Timeline" required>
                    <SelectBox value={form.timeline} onChange={(v) => set('timeline', v)} placeholder="Select timeline" options={TIMELINE_OPTIONS} />
                  </Field>

                  <label className="flex items-start gap-2 text-xs text-gray-600">
                    <input type="checkbox" checked={form.remote} onChange={(e) => set('remote', e.target.checked)} className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand" />
                    <span>I&apos;m open to remote collaboration with experts anywhere in India.</span>
                  </label>
                  <label className="flex items-start gap-2 text-xs text-gray-600">
                    <input type="checkbox" checked={form.agree} onChange={(e) => set('agree', e.target.checked)} className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand" />
                    <span>I agree to Flyrlink&apos;s Terms &amp; Privacy Policy.</span>
                  </label>

                  <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                    <button
                      type="submit"
                      disabled={!form.agree}
                      className="inline-flex flex-1 items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Submit Project
                    </button>
                    <button
                      type="button"
                      onClick={() => setForm({ ...empty })}
                      className="inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-50 sm:flex-1"
                    >
                      Clear Form
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why register */}
      <section className="bg-[#F2F7FF] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold tracking-[-0.5px] text-navy-900 md:text-4xl">
              Why Register with Flyrlink?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-gray-600">
              Everything you need to find the right expert and get your project
              done — securely and on time.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy-900">{w.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

const inputCls =
  'w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand';

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-navy-900">
        {label}{required && <span className="text-brand"> *</span>}
      </label>
      {children}
    </div>
  );
}

function SelectBox({
  value, onChange, placeholder, options,
}: {
  value: string; onChange: (v: string) => void; placeholder: string; options: string[];
}) {
  return (
    <div className="relative">
      <select required value={value} onChange={(e) => onChange(e.target.value)} className={`${inputCls} appearance-none pr-10`}>
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
    </div>
  );
}
