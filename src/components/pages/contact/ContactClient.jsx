"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, Phone, Mail, CheckCircle, XCircle, ChevronDown, Search, Copy, Share2 } from "lucide-react";
import { countryDialCodes } from "@/lib/countryConstants";
import JsonLd from "@/components/JsonLd";

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

const OFFICES = [
  {
    id: 'india',
    name: 'India Office',
    location: 'Surat, Gujarat',
    badge: 'HQ & Plant',
    flag: 'in',
    phone: '+91 9274748030',
    phoneHref: 'tel:+919274748030',
    email: 'info@dinexecopack.com',
    address: 'PLOT NO-03, LAXMIBA WAREHOUSE, NEAR VALTHAN CHOWKDI, VALTHAN-PUNAGAM ROAD, VALTHAN, SURAT-394325',
    addressLines: [
      'PLOT NO-03, LAXMIBA WAREHOUSE,',
      'NEAR VALTHAN CHOWKDI, VALTHAN-PUNAGAM ROAD,',
      'VALTHAN, SURAT-394325'
    ],
    mapEmbed: 'https://maps.google.com/maps?q=PLOT%20NO-03,%20LAXMIBA%20WAREHOUSE,NEAR%20VALTHAN%20CHOWKDI,%20VALTHAN-PUNAGAM%20ROAD,%20VALTHAN,%20SURAT-394325&t=&z=15&ie=UTF8&iwloc=&output=embed',
    mapLink: 'https://maps.app.goo.gl/wu4mgugqksAMz7FcA',
    hours: [
      { day: 'Monday – Friday', hours: '9:00 AM – 7:00 PM' },
      { day: 'Saturday', hours: '9:00 AM – 6:00 PM' },
      { day: 'Sunday', hours: 'Closed' },
    ],
  },
  {
    id: 'uk',
    name: 'UK Office',
    location: 'London, England',
    badge: 'International Sales',
    flag: 'gb',
    phone: '+44 7879905973',
    phoneHref: 'tel:+447879905973',
    email: 'info@dinexecopack.com',
    address: '114, Belmont rise, Cheam, London. SM26EE',
    addressLines: [
      '114, Belmont rise,',
      'Cheam, London. SM26EE'
    ],
    mapEmbed: 'https://maps.google.com/maps?q=114,Belmont%20Rise,Cheam,London,SM26EE&t=&z=15&ie=UTF8&iwloc=&output=embed',
    mapLink: 'https://maps.google.com/?q=114,Belmont+Rise,Cheam,London,SM2+6EE',
    hours: [
      { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
      { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
      { day: 'Sunday', hours: 'Closed' },
    ],
  }
];

function MapModal({ initialOfficeId = 'india', onClose }) {
  const [officeId, setOfficeId] = useState(initialOfficeId);
  const [tab, setTab] = useState('map');
  const [copied, setCopied] = useState(false);
  const [from, setFrom] = useState('');
  const modalRef = useRef(null);

  const currentOffice = OFFICES.find(o => o.id === officeId) || OFFICES[0];

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

  const handleCopy = () => copyToClipboard(currentOffice.address);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: `DineX Ecopack - ${currentOffice.name}`, text: currentOffice.address, url: currentOffice.mapLink })
        .catch(() => copyToClipboard(currentOffice.mapLink));
    } else {
      copyToClipboard(currentOffice.mapLink);
    }
  };

  const getDirectionsUrl = `https://www.google.com/maps/dir/${encodeURIComponent(from)}/${encodeURIComponent(currentOffice.address)}`;

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
              <h3 className="font-bold text-gray-900 text-base">{currentOffice.name}</h3>
              <p className="text-xs text-gray-500">DineX Ecopack • {currentOffice.location}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
          >
            <XCircle className="size-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Office Switcher Bar */}
        <div className="px-6 pt-4 pb-2 border-b border-gray-100/80 bg-gray-50/50 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex bg-gray-200/70 p-1 rounded-xl gap-1">
            {OFFICES.map(o => (
              <button
                key={o.id}
                type="button"
                onClick={() => { setOfficeId(o.id); setFrom(''); }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  officeId === o.id
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <FlagImg code={o.flag} size={16} />
                <span>{o.name}</span>
              </button>
            ))}
          </div>

          {/* Sub tabs (Map, Directions, Info) */}
          <div className="flex gap-1">
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${tab === t.id
                  ? 'bg-primary text-white shadow-sm shadow-primary/20'
                  : 'text-gray-500 hover:bg-gray-200/50'
                  }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-auto p-6 pt-4">

          {/* Map Tab */}
          {tab === 'map' && (
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden ring-1 ring-gray-100 shadow-sm" style={{ height: 380 }}>
                <iframe
                  key={currentOffice.id}
                  title={`${currentOffice.name} Map`}
                  src={currentOffice.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={currentOffice.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity shadow-md shadow-primary/20"
              >
                <MapPin className="size-4" strokeWidth={2} />
                Open {currentOffice.name} in Google Maps
              </a>
            </div>
          )}

          {/* Directions Tab */}
          {tab === 'directions' && (
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden ring-1 ring-gray-100 shadow-sm" style={{ height: 260 }}>
                <iframe
                  key={currentOffice.id}
                  title={`${currentOffice.name} Directions Map`}
                  src={currentOffice.mapEmbed}
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
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">To ({currentOffice.name})</label>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50">
                    <MapPin className="size-4 text-primary shrink-0" strokeWidth={1.5} />
                    <span className="text-sm text-gray-700 truncate">{currentOffice.address}</span>
                  </div>
                </div>
                <a
                  href={from ? getDirectionsUrl : currentOffice.mapLink}
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
                { icon: MapPin, label: 'Address', value: currentOffice.address },
                { icon: Phone, label: 'Phone', value: currentOffice.phone, href: currentOffice.phoneHref },
                { icon: Mail, label: 'Email', value: currentOffice.email, href: `mailto:${currentOffice.email}` },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 ring-1 ring-gray-100">
                  <div className="bg-primary/10 p-2.5 rounded-xl shrink-0">
                    <Icon className="size-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-gray-800 font-medium hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-800 font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Hours */}
              <div className="p-4 rounded-2xl bg-gray-50 ring-1 ring-gray-100">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Business Hours ({currentOffice.name})</p>
                <div className="space-y-1">
                  {currentOffice.hours.map(({ day, hours }) => (
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

export default function ContactClient() {
  const [selected, setSelected] = useState(countryDialCodes[0]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const [activePreviewOffice, setActivePreviewOffice] = useState('india');
  const [modalOfficeId, setModalOfficeId] = useState('india');
  const [showMapModal, setShowMapModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [errors, setErrors] = useState({});

  const previewOffice = OFFICES.find(o => o.id === activePreviewOffice) || OFFICES[0];

  const handleOpenMap = (officeId = 'india') => {
    setModalOfficeId(officeId);
    setShowMapModal(true);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required.';
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
    }

    if (!email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{6,15}$/.test(phone.replace(/[\s\-()]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!subject) {
      newErrors.subject = 'Please select a subject.';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone: `${selected.dialCode} ${phone}`,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form.');
      }

      setShowSuccess(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
      setErrors({});
    } catch (err) {
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8 mt-16 font-sans">
      <JsonLd type="organization" />
      <div className="max-w-7xl mx-auto space-y-12">

        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <span>Contact Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            We'd Love to Hear From You
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Have questions about our sustainable packaging solutions, custom branding, or distributorship? Reach out to our global team today.
          </p>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* ── FORM ── */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="bg-white rounded-3xl shadow-sm ring-1 ring-gray-100 p-8 sm:p-10">
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900">Send us a Message</h2>
                <p className="text-sm text-gray-500 mt-1">Fill in the details below and we'll respond within 24 hours.</p>
              </div>

              <div className="space-y-5">
                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">First Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={e => { setFirstName(e.target.value); if (errors.firstName) setErrors(prev => ({ ...prev, firstName: '' })); }}
                      placeholder="John"
                      className={errors.firstName ? errorInputClass : inputClass}
                    />
                    {errors.firstName && <p className="text-xs text-red-500">{errors.firstName}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">Last Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={e => { setLastName(e.target.value); if (errors.lastName) setErrors(prev => ({ ...prev, lastName: '' })); }}
                      placeholder="Doe"
                      className={errors.lastName ? errorInputClass : inputClass}
                    />
                    {errors.lastName && <p className="text-xs text-red-500">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Email Address <span className="text-red-400">*</span></label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); if (errors.email) setErrors(prev => ({ ...prev, email: '' })); }}
                    placeholder="john@example.com"
                    className={errors.email ? errorInputClass : inputClass}
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Phone Number <span className="text-red-400">*</span></label>
                  <div className="flex gap-2">
                    <DialCodeSelector selected={selected} setSelected={setSelected} />
                    <input
                      type="tel"
                      value={phone}
                      onChange={e => { setPhone(e.target.value); if (errors.phone) setErrors(prev => ({ ...prev, phone: '' })); }}
                      placeholder="98765 43210"
                      className={errors.phone ? errorInputClass : inputClass}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Subject <span className="text-red-400">*</span></label>
                  <SubjectSelector
                    value={subject}
                    onChange={val => { setSubject(val); if (errors.subject) setErrors(prev => ({ ...prev, subject: '' })); }}
                    error={errors.subject}
                  />
                  {errors.subject && <p className="text-xs text-red-500">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Message <span className="text-red-400">*</span></label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={e => { setMessage(e.target.value); if (errors.message) setErrors(prev => ({ ...prev, message: '' })); }}
                    placeholder="Tell us about your requirements..."
                    className={`${errors.message ? errorInputClass : inputClass} resize-none`}
                  />
                  {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full py-4 px-6 bg-primary text-white rounded-xl font-semibold hover:opacity-90 transition-all shadow-md shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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

          {/* ── GET IN TOUCH ── */}
          <div className="lg:col-span-2 flex flex-col order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-sm ring-1 ring-gray-100 overflow-hidden flex flex-col flex-1">

              {/* Map Preview & Office Selector */}
              <div className="p-4 pb-0 bg-gray-50/60 border-b border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Office Map</span>
                  <div className="flex bg-gray-200/80 p-1 rounded-xl gap-1">
                    {OFFICES.map(o => (
                      <button
                        key={o.id}
                        type="button"
                        onClick={() => setActivePreviewOffice(o.id)}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                          activePreviewOffice === o.id
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        <FlagImg code={o.flag} size={14} />
                        <span>{o.name.replace(' Office', '')}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Map Preview Frame */}
                <button
                  type="button"
                  onClick={() => handleOpenMap(activePreviewOffice)}
                  className="w-full group relative overflow-hidden rounded-2xl ring-1 ring-gray-200/70 mb-4 block text-left"
                  style={{ height: 210 }}
                  aria-label={`View ${previewOffice.name} on map`}
                >
                  <iframe
                    key={previewOffice.id}
                    title={`${previewOffice.name} Preview`}
                    src={previewOffice.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: 'block', pointerEvents: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-200 flex flex-col items-center justify-center gap-2">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-lg group-hover:scale-105 transition-transform duration-200">
                      <MapPin className="size-4 text-primary shrink-0" strokeWidth={2} />
                      <span className="text-xs font-bold text-gray-800">View {previewOffice.name} Map</span>
                    </div>
                    <p className="text-white/95 text-[11px] font-medium drop-shadow">Click for interactive map & directions</p>
                  </div>
                </button>
              </div>

              {/* Contact info */}
              <div className="flex flex-col px-6 sm:px-8 py-7 gap-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Our Locations</h2>
                  <p className="text-xs text-gray-500 mt-0.5">Visit or contact our global offices</p>
                </div>

                {/* Office 1: India Office */}
                <div className="rounded-2xl p-4 bg-gray-50/80 ring-1 ring-gray-100 transition-all hover:bg-gray-50">
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2">
                      <FlagImg code="in" size={18} />
                      <h3 className="font-bold text-gray-900 text-sm">India Office</h3>
                    </div>
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      HQ / Plant
                    </span>
                  </div>

                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    PLOT NO-03, LAXMIBA WAREHOUSE,<br />
                    NEAR VALTHAN CHOWKDI, VALTHAN-PUNAGAM ROAD,<br />
                    VALTHAN, SURAT-394325
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-1 border-t border-gray-200/60 text-xs">
                    <a
                      href="tel:+919274748030"
                      className="inline-flex items-center gap-1.5 font-medium text-gray-700 hover:text-primary transition-colors"
                    >
                      <Phone className="size-3 text-primary" />
                      <span>+91 9274748030</span>
                    </a>
                    <span className="text-gray-300">•</span>
                    <button
                      type="button"
                      onClick={() => handleOpenMap('india')}
                      className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                    >
                      <MapPin className="size-3" />
                      <span>Map & Directions</span>
                    </button>
                  </div>
                </div>

                {/* Office 2: UK Office */}
                <div className="rounded-2xl p-4 bg-gray-50/80 ring-1 ring-gray-100 transition-all hover:bg-gray-50">
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2">
                      <FlagImg code="gb" size={18} />
                      <h3 className="font-bold text-gray-900 text-sm">UK Office</h3>
                    </div>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      UK & Europe
                    </span>
                  </div>

                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    114, Belmont rise,<br />
                    Cheam, London. SM26EE
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-1 border-t border-gray-200/60 text-xs">
                    <a
                      href="tel:+447879905973"
                      className="inline-flex items-center gap-1.5 font-medium text-gray-700 hover:text-primary transition-colors"
                    >
                      <Phone className="size-3 text-primary" />
                      <span>+44 7879905973</span>
                    </a>
                    <span className="text-gray-300">•</span>
                    <button
                      type="button"
                      onClick={() => handleOpenMap('uk')}
                      className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                    >
                      <MapPin className="size-3" />
                      <span>Map & Directions</span>
                    </button>
                  </div>
                </div>

                {/* Direct Communications */}
                <div className="border-t border-gray-100 pt-5 space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="bg-primary/10 p-2.5 rounded-xl shrink-0">
                      <Phone className="size-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Customer Support</span>
                      <div className="flex flex-col gap-1 mt-1">
                        <a href="tel:+919274748030" className="text-sm font-medium text-gray-800 hover:text-primary transition-colors">
                          +91 9274748030 <span className="text-xs text-gray-400 font-normal">(India)</span>
                        </a>
                        <a href="tel:+447879905973" className="text-sm font-medium text-gray-800 hover:text-primary transition-colors">
                          +44 7879905973 <span className="text-xs text-gray-400 font-normal">(UK)</span>
                        </a>
                      </div>
                      <span className="text-[11px] text-gray-400 mt-1">Mon–Sat 9:00 AM to 6:00 PM</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="bg-primary/10 p-2.5 rounded-xl shrink-0">
                      <Mail className="size-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Email Inquiries</span>
                      <a href="mailto:info@dinexecopack.com" className="text-sm font-medium text-gray-800 hover:text-primary transition-colors mt-0.5">
                        info@dinexecopack.com
                      </a>
                      <span className="text-[11px] text-gray-400 mt-1">We respond within 24 hours</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
      {showError && <ErrorModal message={errorMessage} onClose={() => setShowError(false)} />}
      {showMapModal && <MapModal initialOfficeId={modalOfficeId} onClose={() => setShowMapModal(false)} />}
    </div>
  );
}
