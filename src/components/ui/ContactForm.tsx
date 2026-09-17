import React, { useState } from 'react';
import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    service: 'AI & Automation',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      if (db) {
        await addDoc(collection(db, 'leads'), {
          name: formData.name,
          business: formData.business,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          status: 'new',
          created_at: serverTimestamp(),
        });
      }
      setTimeout(() => setStatus('success'), 800);
    } catch (err) {
      console.error('Firebase Error:', err);
      setStatus('error');
    }
  };

  const inputClasses =
    'w-full bg-ai-charcoal/80 border border-ai-ivory/10 rounded-lg px-4 py-3.5 text-ai-ivory text-base placeholder:text-ai-muted/40 focus:outline-none focus:border-ai-saffron/60 focus:ring-1 focus:ring-ai-saffron/30 transition-all font-medium hover:border-ai-ivory/20';
  const labelClasses = 'block text-xs tracking-[0.15em] uppercase font-bold text-ai-muted/60 mb-2';

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center justify-center text-center p-12 bg-ai-charcoal border border-ai-ivory/10 rounded-2xl"
      >
        <CheckCircle className="w-12 h-12 text-ai-saffron mb-6" strokeWidth={2} />
        <h3 className="text-2xl font-display font-bold mb-2 text-ai-ivory">Message received.</h3>
        <p className="text-base text-ai-muted font-medium">We'll get back to you shortly to start the conversation.</p>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate={false}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className={labelClasses}>Name</label>
            <input
              id="name"
              required
              type="text"
              className={inputClasses}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="business" className={labelClasses}>Business</label>
            <input
              id="business"
              type="text"
              className={inputClasses}
              value={formData.business}
              onChange={(e) => setFormData({ ...formData, business: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className={labelClasses}>WhatsApp / Phone</label>
            <input
              id="phone"
              type="tel"
              required
              className={inputClasses}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>Email</label>
            <input
              id="email"
              required
              type="email"
              className={inputClasses}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className={labelClasses}>What do you need?</label>
          <select
            id="service"
            className={`${inputClasses} appearance-none cursor-pointer`}
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          >
            <option value="AI & Automation">AI & Automation</option>
            <option value="Website">Website</option>
            <option value="App">App</option>
            <option value="SEO">SEO</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Video Editing">Video Editing</option>
            <option value="Branding">Branding</option>
            <option value="Computer Vision">Computer Vision</option>
            <option value="Custom Solution">Custom Solution</option>
            <option value="Not Sure Yet">Not Sure Yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>Message</label>
          <textarea
            id="message"
            required
            placeholder="Tell us what you have in mind..."
            rows={4}
            className={`${inputClasses} resize-none`}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="bg-ai-saffron text-ai-midnight font-bold px-8 py-4 rounded-lg hover:bg-ai-saffron/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full mt-2 flex items-center justify-center gap-2 group text-sm tracking-wide"
        >
          {status === 'submitting' ? 'Sending...' : 'START A CONVERSATION'}
          {status !== 'submitting' && <span className="group-hover:translate-x-1 transition-transform">→</span>}
        </button>

        {status === 'error' && (
          <p className="text-red-400 text-sm font-medium text-center">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
};
