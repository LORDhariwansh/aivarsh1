import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Compose, type ComposeMention, type ComposeCommand } from '../ui/compose';

const MENTIONS: ComposeMention[] = [
  { id: 'team', label: 'ai-varsh', sublabel: 'Our core team' },
  { id: 'hariwansh', label: 'hariwansh', sublabel: 'Founder' },
];

const iconProps = {
  viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 1.6,
  strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
};

const COMMANDS: ComposeCommand[] = [
  {
    id: 'web',
    label: 'website',
    hint: 'I need a new website',
    icon: <svg {...iconProps}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>,
  },
  {
    id: 'ai',
    label: 'automate',
    hint: 'I want AI automation',
    icon: <svg {...iconProps}><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  },
  {
    id: 'design',
    label: 'design',
    hint: 'I need branding / graphics',
    icon: <svg {...iconProps}><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
  },
  {
    id: 'seo',
    label: 'growth',
    hint: 'SEO and digital visibility',
    icon: <svg {...iconProps}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
  },
];

export const FinalSection = () => {
  return (
    <section id="contact" className="py-32 md:py-48 bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <AnimatedSection>
              <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-display font-medium tracking-tighter text-zinc-50 leading-[0.9] mb-12">
                Ready<br />to build.
              </h2>
              <p className="text-base text-zinc-500 font-light mb-12 max-w-xs leading-relaxed">
                Tell us what you're building or trying to solve. We start with a conversation, not a contract.
              </p>
              <div className="space-y-2">
                <p className="text-[10px] font-mono tracking-widest uppercase text-zinc-700 mb-4">Direct</p>
                <a href="mailto:contact@ai-varsh.com" className="block text-sm text-zinc-400 hover:text-zinc-50 transition-colors">contact@ai-varsh.com</a>
                <a href="https://wa.me/917804877448" className="block text-sm text-zinc-400 hover:text-zinc-50 transition-colors">+91 78048 77448</a>
                <a href="https://www.instagram.com/ai.varsh/" className="block text-sm text-zinc-400 hover:text-zinc-50 transition-colors">@ai.varsh</a>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={150} className="w-full">
            <Compose
              mentions={MENTIONS}
              commands={COMMANDS}
              maxLength={600}
              placeholder="Describe your project…  press @ to tag us, / for quick topics"
              submitLabel="Send"
              onSubmit={(v) => console.log('Lead submitted:', v)}
              onCommand={(c) => console.log('Command:', c.label)}
              aria-label="Project inquiry"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
