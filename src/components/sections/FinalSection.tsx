import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from '../ui/ContactForm';

export const FinalSection = () => {
  return (
    <section id="contact" className="relative py-28 md:py-40 bg-surface border-t border-border overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(109, 40, 217, 0.04) 50%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-16 lg:gap-24 items-start">
          
          {/* Left: Headline & direct info */}
          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-xs font-mono tracking-widest uppercase text-accent mb-4 block font-medium"
            >
              Start a Conversation
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground leading-[1.08] mb-6"
            >
              Have an idea <br />
              <span className="text-accent underline decoration-accent/30 underline-offset-8">worth building?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-base md:text-lg text-muted font-light leading-relaxed mb-10 max-w-md"
            >
              Tell us what you are trying to achieve. Let's find the right way forward. We start with a conversation, not a contract.
            </motion.p>

            {/* Direct contact channels */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              className="flex flex-col gap-6 pt-6 border-t border-border"
            >
              <div>
                <p className="text-xs font-mono tracking-widest uppercase text-muted mb-1.5 font-medium">Direct Email</p>
                <a
                  href="mailto:hello@aivarsh.in"
                  className="text-base font-semibold text-foreground hover:text-accent transition-colors"
                >
                  hello@aivarsh.in
                </a>
              </div>

              <div>
                <p className="text-xs font-mono tracking-widest uppercase text-muted mb-1.5 font-medium">WhatsApp / Phone</p>
                <a
                  href="https://wa.me/917804877448"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-base font-semibold text-foreground hover:text-accent transition-colors"
                >
                  <span>+91 78048 77448</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </a>
              </div>

              <div>
                <p className="text-xs font-mono tracking-widest uppercase text-muted mb-1.5 font-medium">Location</p>
                <p className="text-sm text-muted font-light">
                  Raipur, Chhattisgarh — Building digital products for ambitious enterprises nationwide.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="bg-background p-8 md:p-10 rounded-2xl border border-border shadow-md shadow-black/5"
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-1">
              Project Details
            </h3>
            <p className="text-xs text-muted font-light mb-8">
              Fill in your details and requirements. We typically respond within 24 hours.
            </p>
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
