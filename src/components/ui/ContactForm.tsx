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

  const inputClass = "w-full bg-transparent border-b border-taste-border py-4 text-taste-text text-base placeholder:text-taste-muted/40 focus:outline-none focus:border-taste-text transition-colors rounded-none font-light";

  if (status === 'success') {
    return (
      <div className="p-8 border border-taste-border text-center">
        <h3 className="text-xl font-medium mb-2 text-taste-text">Message received.</h3>
        <p className="text-sm text-taste-muted font-light">We will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-md">
      <input id="name" required type="text" placeholder="Name" className={inputClass} value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
      <input id="email" required type="email" placeholder="Email" className={inputClass} value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
      <textarea id="message" required placeholder="Project details" rows={4} className={`${inputClass} resize-none`} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
      
      <button type="submit" disabled={status === 'submitting'} className="bg-taste-text text-taste-bg font-medium px-8 py-4 w-full mt-4 hover:bg-taste-muted transition-colors disabled:opacity-50">
        {status === 'submitting' ? 'Sending...' : 'Submit'}
      </button>
      {status === 'error' && <p className="text-red-400 text-xs mt-2 text-center">An error occurred. Please try again.</p>}
    </form>
  );
};
