import React, { useState } from 'react';
import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      if (db) {
        await addDoc(collection(db, 'leads'), {
          ...formData,
          status: 'new',
          created_at: serverTimestamp(),
        });
      }
      setTimeout(() => setStatus('success'), 800);
    } catch (err) {
      setStatus('error');
    }
  };

  const inputClass = "w-full bg-taste-surface border border-taste-border px-4 py-3 text-taste-text text-sm focus:outline-none focus:border-taste-muted transition-colors rounded-none font-light";
  const labelClass = "block text-[11px] font-mono tracking-widest uppercase text-taste-muted mb-2";

  if (status === 'success') {
    return (
      <div className="p-12 border border-taste-border bg-taste-surface text-left">
        <h3 className="text-2xl font-display font-medium mb-3 text-taste-text">Message received.</h3>
        <p className="text-sm text-taste-muted font-light">We will be in touch shortly to start the conversation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-md">
      <div>
        <label htmlFor="name" className={labelClass}>Name</label>
        <input 
          id="name" 
          required 
          type="text" 
          className={inputClass} 
          value={formData.name} 
          onChange={e => setFormData({ ...formData, name: e.target.value })} 
        />
      </div>
      
      <div>
        <label htmlFor="email" className={labelClass}>Email Address</label>
        <input 
          id="email" 
          required 
          type="email" 
          className={inputClass} 
          value={formData.email} 
          onChange={e => setFormData({ ...formData, email: e.target.value })} 
        />
      </div>
      
      <div>
        <label htmlFor="message" className={labelClass}>Project Details</label>
        <textarea 
          id="message" 
          required 
          rows={5} 
          className={`${inputClass} resize-none`} 
          value={formData.message} 
          onChange={e => setFormData({ ...formData, message: e.target.value })} 
        />
      </div>
      
      <button 
        type="submit" 
        disabled={status === 'submitting'} 
        className="bg-taste-text text-taste-bg font-medium px-8 py-4 w-full mt-2 hover:bg-taste-muted transition-colors disabled:opacity-50 text-sm"
      >
        {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
      </button>
      
      {status === 'error' && (
        <p className="text-taste-accent text-xs mt-2">An error occurred. Please try again or email us directly.</p>
      )}
    </form>
  );
};
