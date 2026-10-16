import React, { useState } from 'react';
import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  honeypot: string; // Anti-spam hidden field
}

const SERVICES = [
  'AI Automation & Workflows',
  'AI Video Analytics & Computer Vision',
  'Software Development',
  'Web Development',
  'Creative Design & Video',
  'SEO & Digital Growth',
  'Custom Technology Solution',
];

const BUDGET_RANGES = [
  'Under ₹50,000',
  '₹50,000 – ₹1,50,000',
  '₹1,50,000 – ₹5,00,000',
  '₹5,00,000+',
  'Flexible / Open to discussion',
];

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    service: SERVICES[0],
    budget: '',
    timeline: '',
    message: '',
    honeypot: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent bot rejection

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and project details.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      if (db) {
        await addDoc(collection(db, 'leads'), {
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim() || null,
          service: formData.service,
          budget: formData.budget || null,
          timeline: formData.timeline || null,
          message: formData.message.trim(),
          source: 'light_saas_website',
          created_at: serverTimestamp(),
        });
      }
      setStatus('success');
    } catch (err: unknown) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage('Could not send message. Please contact us directly at hello@aivarsh.in or via WhatsApp.');
    }
  };

  const inputClass =
    'w-full bg-surface border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted/50 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 shadow-2xs';
  const labelClass = 'block text-xs font-mono tracking-widest uppercase text-muted mb-2 font-medium';

  if (status === 'success') {
    return (
      <div className="p-8 md:p-12 border border-accent/40 bg-surface rounded-2xl text-left shadow-lg shadow-black/5">
        <div className="w-12 h-12 rounded-full bg-accent-soft text-accent flex items-center justify-center mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-2xl font-display font-semibold mb-3 text-foreground">
          Inquiry received.
        </h3>
        <p className="text-base text-muted font-light leading-relaxed mb-6">
          Thank you for reaching out, {formData.name}. We will review your project details and respond with a practical next step within 24 hours.
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setFormData({
              name: '',
              email: '',
              company: '',
              service: SERVICES[0],
              budget: '',
              timeline: '',
              message: '',
              honeypot: '',
            });
          }}
          className="text-xs font-mono uppercase tracking-widest text-accent font-semibold hover:underline cursor-pointer"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full text-left">
      {/* Honeypot field */}
      <input
        type="text"
        name="website_hp"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="form-name" className={labelClass}>
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="form-name"
            required
            type="text"
            placeholder="John Doe"
            className={inputClass}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="form-email" className={labelClass}>
            Business Email <span className="text-accent">*</span>
          </label>
          <input
            id="form-email"
            required
            type="email"
            placeholder="john@company.com"
            className={inputClass}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="form-company" className={labelClass}>
            Company Name <span className="text-muted/60 lowercase font-normal">(optional)</span>
          </label>
          <input
            id="form-company"
            type="text"
            placeholder="Your Business or Startup"
            className={inputClass}
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="form-service" className={labelClass}>
            Service Required <span className="text-accent">*</span>
          </label>
          <select
            id="form-service"
            className={`${inputClass} cursor-pointer`}
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          >
            {SERVICES.map((s) => (
              <option key={s} value={s} className="bg-surface text-foreground">
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="form-budget" className={labelClass}>
            Estimated Budget <span className="text-muted/60 lowercase font-normal">(optional)</span>
          </label>
          <select
            id="form-budget"
            className={`${inputClass} cursor-pointer`}
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          >
            <option value="" className="bg-surface text-muted">Select an approximate range</option>
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b} className="bg-surface text-foreground">
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="form-timeline" className={labelClass}>
            Desired Timeline <span className="text-muted/60 lowercase font-normal">(optional)</span>
          </label>
          <input
            id="form-timeline"
            type="text"
            placeholder="e.g. 4-6 weeks / Immediate"
            className={inputClass}
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label htmlFor="form-message" className={labelClass}>
          Project Details <span className="text-accent">*</span>
        </label>
        <textarea
          id="form-message"
          required
          rows={4}
          placeholder="Tell us what you are trying to solve, your desired workflow, or your product concept..."
          className={`${inputClass} resize-none`}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl text-sm tracking-wide hover:brightness-110 shadow-violet-glow hover:shadow-violet-glow-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Submitting Inquiry...</span>
          </>
        ) : (
          'Send Inquiry →'
        )}
      </button>

      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs">
          {errorMessage || 'An error occurred. Please try again or reach out directly.'}
        </div>
      )}

      <p className="text-[11px] font-mono text-muted text-center">
        We respect your privacy. No marketing spam — only tailored technical and project follow-up.
      </p>
    </form>
  );
};
