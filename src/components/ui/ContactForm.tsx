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
    message: ''
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

      setTimeout(() => {
        setStatus('success');
      }, 800);
    } catch (err) {
      console.error('Firebase Error:', err);
      setStatus('error');
    }
  };

  const inputClasses = "w-full bg-ai-forest border-b border-ai-ivory/20 px-4 py-3 text-ai-ivory text-sm placeholder:text-ai-ivory/30 focus:outline-none focus:border-ai-gold transition-colors font-light rounded-none";
  const labelClasses = "block text-xs font-semibold tracking-widest uppercase text-ai-ivory/50 mb-2";

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center justify-center text-center p-12 bg-ai-forest border border-ai-ivory/10"
      >
        <CheckCircle className="w-12 h-12 text-ai-gold mb-6" strokeWidth={1.5} />
        <h3 className="text-2xl font-display font-medium mb-2 text-ai-ivory">Message received.</h3>
        <p className="text-ai-ivory/60 text-sm font-light">We'll get back to you shortly to start the conversation.</p>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate={false}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <label htmlFor="name" className={labelClasses}>Name</label>
            <input 
              id="name"
              required
              type="text" 
              className={inputClasses}
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="business" className={labelClasses}>Business / Organization</label>
            <input 
              id="business"
              type="text" 
              className={inputClasses}
              value={formData.business}
              onChange={e => setFormData({...formData, business: e.target.value})}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <label htmlFor="phone" className={labelClasses}>Phone / WhatsApp</label>
            <input 
              id="phone"
              type="tel" 
              required
              className={inputClasses}
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
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
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className={labelClasses}>What do you need?</label>
          <select 
            id="service"
            className={`${inputClasses} appearance-none cursor-pointer`}
            value={formData.service}
            onChange={e => setFormData({...formData, service: e.target.value})}
          >
            <option value="AI & Automation">AI & Automation</option>
            <option value="Website">Website</option>
            <option value="App">App</option>
            <option value="SEO">SEO</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Video Editing">Video Editing</option>
            <option value="Branding">Branding</option>
            <option value="Custom Solution">Custom Solution</option>
            <option value="Not Sure Yet">Not Sure Yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>Message</label>
          <textarea 
            id="message"
            required
            placeholder="Tell us a little about your project..." 
            rows={4}
            className={`${inputClasses} resize-none`}
            value={formData.message}
            onChange={e => setFormData({...formData, message: e.target.value})}
          />
        </div>

        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="bg-ai-ivory text-ai-forest font-medium px-10 py-4 hover:bg-ai-gold hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto self-start mt-4 flex items-center gap-2 group"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
          {!status && <span className="group-hover:translate-x-1 transition-transform">→</span>}
        </button>

        {status === 'error' && (
          <p className="text-red-400 text-sm font-light">Something went wrong. Please try again.</p>
        )}
      </form>

      <div className="mt-12 pt-8 border-t border-ai-ivory/10">
        <p className="text-sm text-ai-ivory/50 font-light">
          Prefer WhatsApp? <a href="#" className="text-ai-gold font-medium hover:text-ai-ivory transition-colors ml-1">Chat with AI Varsh →</a>
        </p>
      </div>
    </div>
  );
};
