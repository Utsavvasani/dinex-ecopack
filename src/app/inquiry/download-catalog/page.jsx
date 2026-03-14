"use client"
import { useState, useRef, useEffect } from "react";
import {
  FileText,
  Download,
  CheckCircle,
  XCircle,
  ChevronDown,
  Search,
  ArrowRight,
  ShieldCheck,
  Zap,
  Leaf
} from "lucide-react";
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
          className="w-full py-3 px-6 bg-primary text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
        >
          Close
        </button>
      </div>
    </div>
  );
}

const industryTypes = [
  { value: 'Food & Beverage', label: 'Food & Beverage' },
  { value: 'Retail', label: 'Retail' },
  { value: 'Hospitality', label: 'Hospitality' },
  { value: 'Individual / Household', label: 'Individual / Household' },
  { value: 'Other', label: 'Other' },
];

function IndustrySelector({ value, onChange, error }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const selected = industryTypes.find(s => s.value === value);

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
          {selected ? selected.label : 'Select Your Industry'}
        </span>
        <ChevronDown className={`size-4 text-gray-400 transition-transform shrink-0 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden">
          <ul className="py-1">
            {industryTypes.map(s => (
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

const inputClass = "w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50 focus:bg-white hover:bg-white placeholder:text-gray-400 text-sm";
const errorInputClass = "w-full px-4 py-3.5 rounded-xl border border-red-300 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400 transition-all bg-red-50/30 focus:bg-white placeholder:text-gray-400 text-sm";

export default function DownloadCatalogPage() {
  const [selected, setSelected] = useState(countryDialCodes[0]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = 'Required';
    if (!lastName.trim()) newErrors.lastName = 'Required';
    if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      newErrors.email = 'Valid email required';
    if (!phone.trim() || !/^\d{7,15}$/.test(phone))
      newErrors.phone = 'Valid phone required';

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
          companyName: companyName.trim() || 'N/A',
          email: email.trim(),
          dialCode: selected?.dialCode || '+91',
          phone: phone.trim(),
          subject: "Catalog Download",
          industry: industry || "Not Specified",
          message: `User requested catalog download. Industry: ${industry || "Not Specified"}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Something went wrong.');
        setShowError(true);
      }
    } catch {
      setErrorMessage('Network error. Please try again.');
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/30 pt-32 pb-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-100">
            <FileText className="size-4" /> Product Catalog
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mb-6">
            Get Our <span className="text-primary">2026 Catalog</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our full range of eco-friendly sugarcane bagasse tableware. Fill out the form below to access the complete digital catalog.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* Features Section */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Inside?</h2>
              <div className="space-y-6">
                {[
                  { icon: Leaf, title: "Product Specifications", desc: "Detailed dimensions and capacities for all our plates, bowls, and trays." },
                  { icon: ShieldCheck, title: "Certifications", desc: "Overview of our compostability and food safety certifications." },
                  { icon: Zap, title: "Customization Options", desc: "Information on private labeling and custom packaging services." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
                    <div className="bg-primary/10 p-2.5 rounded-xl shrink-0 h-fit">
                      <item.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-200">
              <img
                src="/landing/round-plates.png"
                alt="Catalog Preview"
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white text-sm font-medium">Over 50+ sustainable products listed</p>
              </div>
            </div>
          </div>

          {/* Form / Download Section */}
          <div className="lg:col-span-3">
            {!isSubmitted ? (
              <div className="bg-white rounded-3xl p-8 xl:p-12 shadow-sm ring-1 ring-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Download</h2>
                <p className="text-gray-500 text-sm mb-8">Please provide your details to unlock the catalog download link.</p>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">First Name <span className="text-red-400">*</span></label>
                      <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}
                        className={errors.firstName ? errorInputClass : inputClass} placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Last Name <span className="text-red-400">*</span></label>
                      <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}
                        className={errors.lastName ? errorInputClass : inputClass} placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Company Name (Optional)</label>
                    <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)}
                      className={inputClass} placeholder="Your Organization" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address <span className="text-red-400">*</span></label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                      className={errors.email ? errorInputClass : inputClass} placeholder="email@example.com" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Phone Number <span className="text-red-400">*</span></label>
                      <div className="flex gap-2 items-start">
                        <DialCodeSelector selected={selected} setSelected={setSelected} />
                        <div className="flex-1">
                          <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                            className={errors.phone ? errorInputClass : inputClass} placeholder="Enter number" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Industry (Optional)</label>
                      <IndustrySelector value={industry} onChange={setIndustry} error={errors.industry} />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full py-4 bg-primary text-white rounded-xl font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:opacity-95 transition-all flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Processing..." : "Submit to Download"}
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 shadow-sm ring-1 ring-gray-100 text-center animate-in fade-in zoom-in duration-500">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
                  <CheckCircle className="size-10 text-emerald-500" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Successful!</h2>
                <p className="text-gray-500 mb-10 max-w-md mx-auto">
                  Thank you for your interest. You can now download our complete product catalog using the button below.
                </p>

                <a
                  href="/products/dinex_ecopack_catalog.pdf"
                  download
                  className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-primary/40 hover:scale-[1.02] transition-all"
                >
                  <Download className="size-6" />
                  Download Catalog PDF
                </a>

                <p className="mt-8 text-xs text-gray-400">
                  File Size: 8.4 MB | Format: PDF
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {showError && <ErrorModal message={errorMessage} onClose={() => setShowError(false)} />}
    </div>
  );
}
