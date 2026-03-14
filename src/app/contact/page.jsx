"use client"
import { useState, useRef, useEffect } from "react";
import { MapPin, Phone, Mail, SendHorizontal, CheckCircle, XCircle, ChevronDown, Search, Copy, Share2 } from "lucide-react";
import { countryDialCodes } from "@/lib/countryConstants";


function FlagImg({ code, size = 20 }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
      alt={code}
      width={size}
      height={size * 0.75}
      className="rounded-sm object-cover shrink-0"
      style={{ width: size, height: size * 0.75 }}
    />
  );
}

function DialCodeSelector({ selected, setSelected }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef(null);

  const filtered = countryDialCodes.filter(
    c =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.dialCode.includes(search)
  );

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="relative shrink-0" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 px-3 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-full text-sm font-medium text-gray-700 min-w-[100px]"
      >
        {selected
          ? <FlagImg code={selected.code} size={20} />
          : <span className="w-5 h-3.5 bg-gray-200 rounded-sm inline-block" />
        }
        <span className="text-gray-600">{selected?.dialCode}</span>
        <ChevronDown className={`size-3.5 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-68 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden" style={{ width: 272 }}>
          <div className="p-2 border-b border-gray-100">
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl">
              <Search className="size-3.5 text-gray-400 shrink-0" />
              <input
                autoFocus
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search country..."
                className="bg-transparent text-sm outline-none w-full text-gray-700 placeholder:text-gray-400"
              />
            </div>
          </div>
          <ul className="max-h-52 overflow-y-auto py-1">
            {filtered.map(c => (
              <li key={c.code}>
                <button
                  type="button"
                  onClick={() => { setSelected(c); setOpen(false); setSearch(''); }}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${selected?.code === c.code ? 'bg-primary/5 text-primary font-medium' : 'text-gray-700'}`}
                >
                  <FlagImg code={c.code} size={20} />
                  <span className="flex-1 text-left truncate">{c.name}</span>
                  <span className="text-gray-400 text-xs shrink-0">{c.dialCode}</span>
                </button>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="px-4 py-3 text-sm text-gray-400 text-center">No results</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

const subjects = [
  { value: 'Product Inquiry', label: 'Product Inquiry' },
  { value: 'Request a Quote', label: 'Request a Quote' },
  { value: 'Technical Support', label: 'Technical Support' },
  { value: 'Other', label: 'Other' },
];

function SubjectSelector({ value, onChange, error }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const selected = subjects.find(s => s.value === value);

  const baseClass = "w-full flex items-center justify-between px-4 py-3.5 rounded-xl border text-sm transition-all focus:outline-none";
  const normalClass = `${baseClass} border-gray-200 bg-gray-50/50 hover:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary`;
  const errorClass = `${baseClass} border-red-300 bg-red-50/30 focus:ring-2 focus:ring-red-200 focus:border-red-400`;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={error ? errorClass : normalClass}
      >
        <span className={selected ? 'text-gray-800' : 'text-gray-400'}>
          {selected ? selected.label : 'Select a subject'}
        </span>
        <ChevronDown className={`size-4 text-gray-400 transition-transform shrink-0 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden">
          <ul className="py-1">
            {subjects.map(s => (
              <li key={s.value}>
                <button
                  type="button"
                  onClick={() => { onChange(s.value); setOpen(false); }}
                  className={`w-full flex items-center px-4 py-3 text-sm hover:bg-gray-50 transition-colors text-left ${value === s.value ? 'bg-primary/5 text-primary font-medium' : 'text-gray-700'}`}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function SuccessModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-10 max-w-sm w-full shadow-2xl text-center animate-in fade-in zoom-in duration-200">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle className="size-8 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-500 text-sm mb-6">Thanks for reaching out. We'll get back to you within 24 hours.</p>
        <button
          onClick={onClose}
          className="w-full py-3 px-6 bg-primary text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
        >
          Done
        </button>
      </div>
    </div>
  );
}

function ErrorModal({ message, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-10 max-w-sm w-full shadow-2xl text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
          <XCircle className="size-8 text-red-500" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Something went wrong</h3>
        <p className="text-gray-500 text-sm mb-6">{message || 'Please try again later.'}</p>
        <button
          onClick={onClose}
          className="w-full py-3 px-6 bg-red-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
        >
          Close
        </button>
      </div>
    </div>
  );
}

const MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.713291122765!2d72.833502575263!3d21.203530580492476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f8de674963f%3A0xbbda33d533e40fc6!2sRose%20Impex!5e0!3m2!1sen!2sin!4v1741933458728!5m2!1sen!2sin";
const MAP_LINK = "https://maps.app.goo.gl/LzfY6PFeFJ7bBFr68";
const FULL_ADDRESS = "6 / 456, 3rd Floor, Kharadi Sheri, Manchharpura, SURAT-395003";

function MapModal({ onClose }) {
  const [tab, setTab] = useState('map');
  const [copied, setCopied] = useState(false);
  const [from, setFrom] = useState('');
  const modalRef = useRef(null);

  // Close on backdrop click
  useEffect(() => {
    function handleKey(e) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const fallbackCopy = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0;';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
    document.body.removeChild(textarea);
  };

  const copyToClipboard = (text) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); })
        .catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  };

  const handleCopy = () => copyToClipboard(FULL_ADDRESS);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: 'Our Office Location', text: FULL_ADDRESS, url: MAP_LINK })
        .catch(() => copyToClipboard(MAP_LINK));
    } else {
      copyToClipboard(MAP_LINK);
    }
  };

  const getDirectionsUrl = `https://www.google.com/maps/dir/${encodeURIComponent(from)}/${encodeURIComponent(FULL_ADDRESS)}`;

  const tabs = [
    { id: 'map', label: 'Map' },
    { id: 'directions', label: 'Directions' },
    { id: 'info', label: 'Info & Share' },
  ];

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col"
        style={{ maxHeight: '90vh' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2.5 rounded-xl">
              <MapPin className="size-5 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base">Our Location</h3>
              <p className="text-xs text-gray-500">Dinex Ecopack</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
          >
            <XCircle className="size-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 px-6 pt-4 pb-0 shrink-0">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${tab === t.id
                  ? 'bg-primary text-white shadow-sm shadow-primary/20'
                  : 'text-gray-500 hover:bg-gray-100'
                }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-auto p-6 pt-4">

          {/* Map Tab */}
          {tab === 'map' && (
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden ring-1 ring-gray-100 shadow-sm" style={{ height: 380 }}>
                <iframe
                  title="Full Map"
                  src={MAP_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity shadow-md shadow-primary/20"
              >
                <MapPin className="size-4" strokeWidth={2} />
                Open in Google Maps
              </a>
            </div>
          )}

          {/* Directions Tab */}
          {tab === 'directions' && (
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden ring-1 ring-gray-100 shadow-sm" style={{ height: 260 }}>
                <iframe
                  title="Directions Map"
                  src={MAP_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">From</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={from}
                      onChange={e => setFrom(e.target.value)}
                      placeholder="Enter your starting location..."
                      className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50 focus:bg-white placeholder:text-gray-400 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">To</label>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50">
                    <MapPin className="size-4 text-primary shrink-0" strokeWidth={1.5} />
                    <span className="text-sm text-gray-700 truncate">{FULL_ADDRESS}</span>
                  </div>
                </div>
                <a
                  href={from ? getDirectionsUrl : MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity shadow-md shadow-primary/20"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          )}

          {/* Info & Share Tab */}
          {tab === 'info' && (
            <div className="space-y-4">
              {/* Info cards */}
              {[
                { icon: MapPin, label: 'Address', value: FULL_ADDRESS },
                { icon: CheckCircle, label: 'GST Number', value: '24DJOPG2992B1Z8' },
                { icon: Phone, label: 'Phone', value: '+91 96245 48030' },
                { icon: Mail, label: 'Email', value: 'dinexecopack@gmail.com' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 ring-1 ring-gray-100">
                  <div className="bg-primary/10 p-2.5 rounded-xl shrink-0">
                    <Icon className="size-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="text-sm text-gray-800 font-medium">{value}</p>
                  </div>
                </div>
              ))}

              {/* Hours */}
              <div className="p-4 rounded-2xl bg-gray-50 ring-1 ring-gray-100">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Business Hours</p>
                <div className="space-y-1">
                  {[
                    { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
                    { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-gray-600">{day}</span>
                      <span className={`font-medium ${hours === 'Closed' ? 'text-red-400' : 'text-gray-900'}`}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {copied ? <CheckCircle className="size-4 text-green-500" /> : <Copy className="size-4" />}
                  {copied ? 'Copied!' : 'Copy Address'}
                </button>
                <button
                  onClick={handleShare}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-md shadow-primary/20"
                >
                  <Share2 className="size-4" />
                  Share Location
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const inputClass = "w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50 focus:bg-white hover:bg-white placeholder:text-gray-400 text-sm";
const errorInputClass = "w-full px-4 py-3.5 rounded-xl border border-red-300 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400 transition-all bg-red-50/30 focus:bg-white placeholder:text-gray-400 text-sm";

export default function ContactPage() {
  const [selected, setSelected] = useState(countryDialCodes[0]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [showMapModal, setShowMapModal] = useState(false);

  const handleSubmit = async () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = 'Please enter your first name.';
    if (!lastName.trim()) newErrors.lastName = 'Please enter your last name.';
    if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      newErrors.email = 'Please enter a valid email address.';
    if (!phone.trim() || !/^\d{7,15}$/.test(phone))
      newErrors.phone = 'Please enter a valid phone number (digits only).';
    if (!subject) newErrors.subject = 'Please select a subject.';
    if (!message.trim()) newErrors.message = 'Please enter your message.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          dialCode: selected?.dialCode || '+91',
          phone: phone.trim(),
          subject,
          message: message.trim(),
        }),
      });

      const data = await res.json();

      if (data.success) {
        setShowSuccess(true);
        setFirstName(''); setLastName(''); setEmail('');
        setPhone(''); setSubject(''); setMessage('');
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
        setShowError(true);
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/30 pt-32 pb-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">

          {/* ── FORM — first on mobile, right on desktop ── */}
          <div className="lg:col-span-3 flex flex-col order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-8 xl:p-12 shadow-sm ring-1 ring-gray-100 flex flex-col flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-500 text-sm mb-8">Have questions? Fill out the form and we'll get back to you soon.</p>

              <div className="space-y-6">
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">First Name <span className="text-red-400">*</span></label>
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}
                      className={errors.firstName ? errorInputClass : inputClass} placeholder="John" />
                    {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Last Name <span className="text-red-400">*</span></label>
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}
                      className={errors.lastName ? errorInputClass : inputClass} placeholder="Doe" />
                    {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address <span className="text-red-400">*</span></label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                    className={errors.email ? errorInputClass : inputClass} placeholder="john@example.com" />
                  {errors.email
                    ? <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                    : <p className="text-xs text-gray-400 mt-1">We'll never share your email.</p>
                  }
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Phone Number <span className="text-red-400">*</span></label>
                  <div className="flex gap-2 items-start">
                    <DialCodeSelector selected={selected} setSelected={setSelected} />
                    <div className="flex-1">
                      <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                        className={errors.phone ? errorInputClass : inputClass} placeholder="Enter mobile number" />
                    </div>
                  </div>
                  {errors.phone
                    ? <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                    : <p className="text-xs text-gray-400 mt-1">Digits only, no spaces or dashes.</p>
                  }
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Subject <span className="text-red-400">*</span></label>
                  <SubjectSelector value={subject} onChange={setSubject} error={errors.subject} />
                  {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message <span className="text-red-400">*</span></label>
                  <textarea rows={5} value={message} onChange={e => setMessage(e.target.value)}
                    className={`resize-y ${errors.message ? errorInputClass : inputClass}`}
                    placeholder="Tell us more about your inquiry..." />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full sm:w-auto px-10 py-4 bg-primary text-white rounded-xl font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:opacity-95 transition-all flex items-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin size-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── GET IN TOUCH — second on mobile, left on desktop ── */}
          <div className="lg:col-span-2 flex flex-col order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-sm ring-1 ring-gray-100 overflow-hidden flex flex-col flex-1">

              {/* Map — fixed height on mobile, 50% on desktop */}
              <button
                type="button"
                onClick={() => setShowMapModal(true)}
                className="w-full group relative overflow-hidden shrink-0"
                style={{ height: 220 }}
                aria-label="View location on map"
              >
                <iframe
                  title="Map Preview"
                  src={MAP_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block', pointerEvents: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-200 flex flex-col items-center justify-center gap-2">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 flex items-center gap-2.5 shadow-lg group-hover:scale-105 transition-transform duration-200">
                    <MapPin className="size-4 text-primary shrink-0" strokeWidth={2} />
                    <span className="text-sm font-semibold text-gray-800">View Full Map</span>
                  </div>
                  <p className="text-white/90 text-xs font-medium drop-shadow">Click to explore & get directions</p>
                </div>
              </button>

              {/* Contact info — always fully visible, no clipping */}
              <div className="flex flex-col border-t border-gray-100 px-8 pt-7 pb-8 xl:px-10 gap-0">
                <h2 className="text-xl font-bold text-gray-900 mb-5">Get in Touch</h2>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-2xl shrink-0 hover:bg-primary/20 transition-colors">
                    <MapPin className="size-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Our Office</h3>
                    <p className="text-gray-600 mt-1 leading-relaxed text-sm">
                      6 / 456, 3rd Floor, Kharadi Sheri,<br />Manchharpura, SURAT-395003
                    </p>
                  </div>
                </div>

                <div className="h-px bg-gray-100 my-4" />

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-2xl shrink-0 hover:bg-primary/20 transition-colors">
                    <CheckCircle className="size-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">GST Number</h3>
                    <p className="text-gray-600 mt-1 text-sm font-medium">24DJOPG2992B1Z8</p>
                  </div>
                </div>

                <div className="h-px bg-gray-100 my-4" />

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-2xl shrink-0 hover:bg-primary/20 transition-colors">
                    <Phone className="size-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Phone</h3>
                    <p className="text-gray-600 mt-1 text-sm">+91 96245 48030</p>
                    <p className="text-xs text-gray-500 mt-0.5">Mon-Sat 9am to 6pm</p>
                  </div>
                </div>

                <div className="h-px bg-gray-100 my-4" />

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-2xl shrink-0 hover:bg-primary/20 transition-colors">
                    <Mail className="size-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Email</h3>
                    <p className="text-gray-600 mt-1 text-sm">dinexecopack@gmail.com</p>
                    <p className="text-xs text-gray-500 mt-0.5">We'll reply within 24 hours</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
      {showError && <ErrorModal message={errorMessage} onClose={() => setShowError(false)} />}
      {showMapModal && <MapModal onClose={() => setShowMapModal(false)} />}
    </div>
  );
}