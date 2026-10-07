import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative w-full z-0 flex flex-col bg-[#FAFAFA] text-zinc-900 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 border-b border-zinc-200 pb-12"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-zinc-500 hover:text-[#E85D04] transition-colors mb-12">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-500 mb-4">Last Updated: October 7, 2026</p>
          <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tighter text-zinc-900 leading-tight">
            Privacy Policy
          </h1>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:font-medium prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-zinc-600 prose-p:leading-relaxed prose-p:font-light prose-li:text-zinc-600 prose-li:font-light"
        >
          <h2>1. Introduction</h2>
          <p>
            AI VARSH ("we", "our", or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (https://www.aivarsh.in/) and use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of personal information when you interact with us:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company or organization details</li>
            <li>Information submitted through contact, compose, or enquiry forms</li>
            <li>Website usage information</li>
            <li>IP address and browser/device information where applicable</li>
          </ul>

          <h2>3. How We Use Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>Responding to your enquiries and requests</li>
            <li>Providing and delivering the requested services</li>
            <li>Communicating with you regarding projects and customer support</li>
            <li>Improving our website, services, and user experience</li>
            <li>Sending marketing communications, where legally permitted and explicitly opted-in</li>
            <li>Preventing fraud, abuse, and addressing security issues</li>
          </ul>

          <h2>4. Cookies and Analytics</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            AI VARSH may use trusted third-party services such as hosting, analytics, communication, payment, CRM, or form-processing providers when required to operate our business and deliver our services. We only share information with these parties to the extent necessary for them to perform their designated functions.
          </p>

          <h2>6. Data Sharing</h2>
          <p>
            We do not sell, rent, or trade your personal information to third parties for marketing purposes. We may share your personal information with trusted service providers who assist us in operating our website and conducting our business, so long as those parties agree to keep this information confidential. We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We implement reasonable technical and organizational measures to maintain the safety of your personal information. However, please be aware that no method of transmission over the internet, or method of electronic storage, is 100% secure, and we cannot guarantee its absolute security.
          </p>

          <h2>8. Data Retention</h2>
          <p>
            We will retain your personal information only for as long as is reasonably necessary for the purposes set out in this Privacy Policy, or as required by applicable law, regulatory requirements, or to resolve disputes.
          </p>

          <h2>9. User Rights</h2>
          <p>
            Depending on your jurisdiction and applicable law, you may have the right to access, correct, update, or request deletion of your personal information. You may also have the right to withdraw consent where it has been previously provided. To exercise any of these rights, please contact us using the information provided below.
          </p>

          <h2>10. Children's Privacy</h2>
          <p>
            Our website and services are not intentionally directed toward children under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
          </p>

          <h2>11. External Links</h2>
          <p>
            Our website may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit, as we have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>

          <h2>12. Policy Updates</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this document. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2>13. Contact / Grievance</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="mt-6 p-6 border border-zinc-200 bg-white">
            <p className="m-0 font-medium text-zinc-900">AI VARSH</p>
            <p className="m-0 text-sm mt-2 text-zinc-600">Website: <a href="https://www.aivarsh.in/" className="text-[#E85D04] hover:underline">https://www.aivarsh.in/</a></p>
            <p className="m-0 text-sm mt-1 text-zinc-600">Email: <a href="mailto:contact@ai-varsh.com" className="text-[#E85D04] hover:underline">contact@ai-varsh.com</a></p>
            <p className="m-0 text-sm mt-1 text-zinc-600">Location: India</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};
