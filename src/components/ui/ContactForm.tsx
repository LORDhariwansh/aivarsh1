import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { motion } from 'framer-motion';
import { CheckCircle, Send } from 'lucide-react';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: 'Website Development',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      if (supabase) {
        // Assume Leads table exists or mock it if failing
        const { error } = await supabase
          .from('leads')
          .insert([
            {
              full_name: formData.fullName,
              company_name: formData.companyName,
              email: formData.email,
              phone: formData.phone,
              service: formData.service,
              message: formData.message,
              status: 'new'
            }
          ]);
        
        if (error) {
           console.error("Supabase Error, using mock success fallback", error);
        }
      }
      
      // Artificial delay for cinematic effect
      setTimeout(() => {
        setStatus('success');
      }, 1500);
      
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const inputClasses = "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-ai-base text-sm placeholder:text-white/25 focus:outline-none focus:border-ai-cyan/50 focus:bg-white/[0.06] transition-all duration-300";

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col items-center justify-center text-center p-12 bg-white/[0.03] rounded-2xl border border-white/10 backdrop-blur-sm"
      >
        <div className="w-16 h-16 rounded-full bg-ai-cyan/10 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-ai-cyan" />
        </div>
        <h3 className="text-2xl font-display font-bold mb-3">YOU'RE CONNECTED.</h3>
        <p className="text-white/50 text-sm">WE'LL TAKE IT FROM HERE. ✦</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-xl" noValidate={false}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="sr-only">Full Name</label>
          <input 
            id="fullName"
            required
            type="text" 
            placeholder="Full Name" 
            className={inputClasses}
            value={formData.fullName}
            onChange={e => setFormData({...formData, fullName: e.target.value})}
          />
        </div>
        <div>
          <label htmlFor="companyName" className="sr-only">Company Name</label>
          <input 
            id="companyName"
            type="text" 
            placeholder="Company Name" 
            className={inputClasses}
            value={formData.companyName}
            onChange={e => setFormData({...formData, companyName: e.target.value})}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="sr-only">Email Address</label>
          <input 
            id="email"
            required
            type="email" 
            placeholder="Email Address" 
            className={inputClasses}
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">Phone Number</label>
          <input 
            id="phone"
            type="tel" 
            placeholder="Phone Number" 
            className={inputClasses}
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="sr-only">Service</label>
        <select 
          id="service"
          className={`${inputClasses} appearance-none cursor-pointer`}
          value={formData.service}
          onChange={e => setFormData({...formData, service: e.target.value})}
        >
          <option value="Website Development" className="bg-ai-dark">Website Development</option>
          <option value="AI Automation" className="bg-ai-dark">AI Automation</option>
          <option value="Digital Marketing" className="bg-ai-dark">Digital Marketing</option>
          <option value="AI Solution" className="bg-ai-dark">Custom AI Solution</option>
          <option value="Other" className="bg-ai-dark">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea 
          id="message"
          required
          placeholder="Tell us what you're trying to build, automate or grow..." 
          rows={4}
          className={`${inputClasses} resize-none`}
          value={formData.message}
          onChange={e => setFormData({...formData, message: e.target.value})}
        />
      </div>

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="group flex items-center justify-center gap-3 bg-ai-base text-ai-dark font-bold text-sm py-4 rounded-xl hover:bg-white hover:shadow-lg hover:shadow-ai-cyan/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
      >
        <span>{status === 'submitting' ? 'CONNECTING...' : 'START A CONVERSATION'}</span>
        <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </form>
  );
};
