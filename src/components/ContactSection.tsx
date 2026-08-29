import React, { useState } from 'react';
import { personalInfo } from '../data/resumeData';
import {
  Mail,
  Phone,
  MessageSquare,
  Linkedin,
  Globe,
  Key,
  Send,
  CheckCircle2,
  Copy,
  Check,
  MapPin,
  Calendar,
  Clock,
  Sparkles,
} from 'lucide-react';

interface ContactSectionProps {
  isModalOpen?: boolean;
  onCloseModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Power Platform / Operations Inquiry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Create mailto link as fallback/action
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    // Set local submitted state
    setIsSubmitted(true);

    // Open mail client
    window.location.href = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative border-t border-white/10 bg-[#121215]">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details matching Image 5 & 6 */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-[#8aceff] mb-3">
                <Mail className="w-3.5 h-3.5" />
                <span>Let's Connect</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
                Contact me
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Available for enterprise solution architecture consulting, Power Platform migrations, and operational leadership advisory.
              </p>
            </div>

            {/* Contact Information List matching Image 5 & 6 */}
            <div className="bg-[#18181d] border border-white/10 rounded-2xl p-6 space-y-3.5 font-mono-code text-xs">
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-neutral-400">Email:</span>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="text-[#8aceff] hover:underline flex items-center gap-1.5"
                  title="Click to copy email"
                >
                  <span>{personalInfo.email}</span>
                  {copiedField === 'email' ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Copy className="w-3 h-3 text-neutral-500" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-neutral-400">WhatsApp / Phone MY:</span>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline flex items-center gap-1.5"
                >
                  <span>{personalInfo.phoneMY}</span>
                </a>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-neutral-400">Phone ID:</span>
                <a
                  href={`tel:${personalInfo.phoneID.replace(/\s+/g, '')}`}
                  className="text-neutral-300 hover:underline"
                >
                  <span>{personalInfo.phoneID}</span>
                </a>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-neutral-400">LinkedIn:</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8aceff] hover:underline"
                >
                  <span>linkedin.com/in/aliakhmadf</span>
                </a>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-neutral-400">Portfolio:</span>
                <a
                  href={personalInfo.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8aceff] hover:underline"
                >
                  <span>altechsolutionportofilo.vercel.app</span>
                </a>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-neutral-400">GPG Key:</span>
                <button
                  onClick={() => handleCopy(personalInfo.gpgKey, 'gpg')}
                  className="text-neutral-300 hover:underline flex items-center gap-1"
                >
                  <span>{personalInfo.gpgKey}</span>
                  {copiedField === 'gpg' ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Key className="w-3 h-3 text-neutral-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Timezone and response SLA badge */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-300">
              <Clock className="w-4 h-4 text-[#009de0] shrink-0" />
              <span>
                Current Location: <strong>Kuala Lumpur (MYT UTC+8)</strong> • Rapid response within 24 hours.
              </span>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#18181d] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Fill in the details below to initiate a consultation or project inquiry directly with Ali.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">
                    Message Prepared & Email Client Launched!
                  </h4>
                  <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. If your email client didn't open automatically, you can write directly to{' '}
                    <span className="text-[#8aceff] font-mono-code font-bold">{personalInfo.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Power Platform / Operations Inquiry', message: '' });
                    }}
                    className="mt-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-white font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-code text-neutral-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe / Sarah Lin"
                        className="w-full bg-[#121215] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#009de0] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-code text-neutral-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@company.com"
                        className="w-full bg-[#121215] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#009de0] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-neutral-300 mb-1.5">
                      Subject / Engagement Scope
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#121215] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#009de0] transition-colors"
                    >
                      <option value="Power Platform / Operations Inquiry">Power Platform & Solution Architecture</option>
                      <option value="Legacy Lotus Domino / M365 Migration">Lotus Domino to M365 / Dataverse Migration</option>
                      <option value="Operational Leadership & Contact Center Consulting">Contact Center & Operations Leadership</option>
                      <option value="AI Builder & Copilot Studio Automation">AI & Workflow Automation Consultation</option>
                      <option value="General Recruitment / Executive Role">Full-Time / Contract Role Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-neutral-300 mb-1.5">
                      Project Details or Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project requirements, team goals, or timeline..."
                      className="w-full bg-[#121215] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#009de0] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    className="w-full py-3 rounded-xl bg-[#009de0] hover:bg-[#0087c2] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#009de0]/20 transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Ali</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
