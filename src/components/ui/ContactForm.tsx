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

  const inputClasses = "w-full bg-white border border-ai-graphite/10 rounded-lg px-4 py-3.5 text-ai-graphite text-base placeholder:text-ai-graphite/30 focus:outline-none focus:border-ai-teal focus:ring-1 focus:ring-ai-teal transition-all font-medium shadow-sm hover:border-ai-graphite/20";
  const labelClasses = "block text-sm font-bold text-ai-graphite/80 mb-2";

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center justify-center text-center p-12 bg-white rounded-xl border border-ai-graphite/10 shadow-modern-sm"
      >
        <CheckCircle className="w-12 h-12 text-ai-teal mb-6" strokeWidth={2} />
        <h3 className="text-2xl font-display font-bold mb-2 text-ai-graphite">Message received.</h3>
        <p className="text-ai-graphite/60 text-base font-medium">We'll get back to you shortly to start the conversation.</p>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate={false}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            <label htmlFor="business" className={labelClasses}>Business</label>
            <input 
              id="business"
              type="text" 
              className={inputClasses}
              value={formData.business}
              onChange={e => setFormData({...formData, business: e.target.value})}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className={labelClasses}>WhatsApp / Phone</label>
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
            placeholder="Tell us what you have in mind..." 
            rows={4}
            className={`${inputClasses} resize-none`}
            value={formData.message}
            onChange={e => setFormData({...formData, message: e.target.value})}
          />
        </div>

        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="bg-ai-graphite text-white font-bold px-8 py-4 rounded-lg hover:bg-ai-teal transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full mt-2 flex items-center justify-center gap-2 group shadow-modern-sm"
        >
          {status === 'submitting' ? 'Sending...' : 'Start a Conversation'}
          {!status && <span className="group-hover:translate-x-1 transition-transform">→</span>}
        </button>

        {status === 'error' && (
          <p className="text-red-500 text-sm font-medium text-center">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
};
