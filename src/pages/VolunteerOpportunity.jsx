import { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../App';
import SectionTitle from '../components/SectionTitle';

const VolunteerOpportunity = () => {
    const { language } = useContext(LanguageContext);
    const [showModal, setShowModal] = useState(false);
    const [registrations, setRegistrations] = useState([]);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        age: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [alreadyRegistered, setAlreadyRegistered] = useState(false);

    const MAX_VOLUNTEERS = 16;
    const STORAGE_KEY = 'elderly-home-volunteers-2026-02-05';

    const t = {
        ar: {
            title: 'فرص التطوع',
            subtitle: 'كن جزءاً من العطاء',
            opportunityTitle: 'نداء إنساني – مبادرة شباب الخير',
            date: '📅 الأربعاء | 4 / 2 / 2026',
            time: '🕐 10 صباحاً - 2 مساءً',
            location: '📍 دار الضيافة للمسنين',
            locationUrl: 'https://maps.app.goo.gl/tHkhnN4apwNwwwZU7?g_st=iw',
            description: `دار المسنين بحاجة لأيدي تساعد وقلوب تعطي 💙

نبحث عن متطوعين يقدّموا وقتهم وطاقتهم
لأن الزيارة تصنع الفرق ✨`,
            cta1: '💫 وقتك صدقة',
            cta2: '💫 مشاركتك حياة',
            finalCall: 'كن معنا متطوعًا 🤝',
            spotsLeft: 'متبقي',
            volunteer: 'متطوع',
            registerNow: 'سجل الآن',
            registrationClosed: 'اكتمل العدد',
            form: {
                title: 'سجل كمتطوع',
                fullName: 'الاسم الكامل',
                phone: 'رقم الهاتف',
                email: 'البريد الإلكتروني',
                age: 'العمر',
                submit: 'تأكيد التسجيل',
                cancel: 'إلغاء'
            },
            success: 'تم تسجيلك بنجاح! ✨\nسنتواصل معك قريباً',
            alreadyRegistered: 'أنت مسجل مسبقاً في هذه الفرصة'
        },
        en: {
            title: 'Volunteer Opportunities',
            subtitle: 'Be part of giving',
            opportunityTitle: 'Humanitarian Call – Shabab Al-Khair Initiative',
            date: '📅 Wednesday | 4 / 2 / 2026',
            time: '🕐 10 AM - 2 PM',
            location: '📍 Golden Age Home',
            locationUrl: 'https://maps.app.goo.gl/tHkhnN4apwNwwwZU7?g_st=iw',
            description: `The elderly home needs helping hands and giving hearts 💙

We're looking for volunteers to share their time and energy.
Because a visit makes a difference ✨`,
            cta1: '💫 Your time matters',
            cta2: '💫 Your presence is life',
            finalCall: 'Join us as a volunteer 🤝',
            spotsLeft: 'Spots left',
            volunteer: 'volunteer',
            registerNow: 'Register Now',
            registrationClosed: 'Registration Closed',
            form: {
                title: 'Register as Volunteer',
                fullName: 'Full Name',
                phone: 'Phone Number',
                email: 'Email',
                age: 'Age',
                submit: 'Confirm Registration',
                cancel: 'Cancel'
            },
            success: 'Successfully registered! ✨\nWe will contact you soon',
            alreadyRegistered: 'You are already registered for this opportunity'
        }
    };

    const text = t[language];

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            setRegistrations(JSON.parse(stored));
        }
    }, []);

    const spotsRemaining = MAX_VOLUNTEERS - registrations.length;

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Formspree endpoint
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkobwdrp';

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if already registered
        const isAlreadyRegistered = registrations.some(
            reg => reg.phone === formData.phone || reg.email === formData.email
        );

        if (isAlreadyRegistered) {
            setAlreadyRegistered(true);
            return;
        }

        setIsSubmitting(true);

        try {
            // Send to Formspree
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: '🤝 تسجيل متطوع جديد - دار المسنين',
                    fullName: formData.fullName,
                    phone: formData.phone,
                    email: formData.email,
                    age: formData.age,
                    opportunity: 'زيارة دار المسنين - 5/2/2026',
                    registeredAt: new Date().toISOString()
                })
            });

            if (response.ok) {
                const newRegistrations = [...registrations, { ...formData, registeredAt: new Date().toISOString() }];
                setRegistrations(newRegistrations);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(newRegistrations));
                setSubmitted(true);
                setFormData({ fullName: '', phone: '', email: '', age: '' });

                setTimeout(() => {
                    setShowModal(false);
                    setSubmitted(false);
                }, 3000);
            } else {
                console.error('Formspree error:', response);
                alert(language === 'ar' ? 'حدث خطأ، حاول مرة أخرى' : 'An error occurred, please try again');
            }
        } catch (error) {
            console.error('Submit error:', error);
            alert(language === 'ar' ? 'حدث خطأ، حاول مرة أخرى' : 'An error occurred, please try again');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setAlreadyRegistered(false);
    };

    return (
        <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-24 relative overflow-hidden">
            {/* Background decorations - Enhanced */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-rose-500/10 to-pink-500/5 blur-3xl animate-float" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-primary/10 to-emerald-500/5 blur-3xl animate-float-slow" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-amber-500/5 to-yellow-500/5 blur-3xl" />

                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `
                        linear-gradient(rgba(26, 95, 63, 0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(26, 95, 63, 0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            <div className="container-custom relative z-10">
                <SectionTitle
                    title={text.title}
                    subtitle={text.subtitle}
                />

                {/* Main Opportunity Card - Enhanced */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative group">
                        {/* Glow effect behind card */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-primary/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

                        <div className="relative bg-white/80 backdrop-blur-xl overflow-hidden rounded-3xl shadow-2xl border border-white/50 transform transition-all duration-500 hover:shadow-3xl">
                            {/* Image Section - Enhanced */}
                            <div className="relative h-80 md:h-[450px] overflow-hidden">
                                <img
                                    src="/elderly-volunteer-opportunity.jpg"
                                    alt="دار المسنين"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Enhanced gradient overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-r from-rose-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Animated shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                                {/* Spots Counter Badge - Enhanced with pulse */}
                                <div className="absolute top-4 left-4 md:top-6 md:left-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                    <div className={`relative px-5 py-3 rounded-2xl font-bold text-white shadow-2xl backdrop-blur-md ${spotsRemaining > 0
                                        ? 'bg-gradient-to-r from-emerald-500/90 to-green-600/90'
                                        : 'bg-gradient-to-r from-red-500/90 to-rose-600/90'
                                        }`}>
                                        {spotsRemaining > 0 && (
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 to-green-500 animate-pulse opacity-50" />
                                        )}
                                        <span className="relative flex items-center gap-2">
                                            <span className="text-3xl font-black">{spotsRemaining}</span>
                                            <span className="text-sm">{text.spotsLeft}</span>
                                            <span className="text-xl">👥</span>
                                        </span>
                                    </div>
                                </div>

                                {/* Date Badge - Enhanced */}
                                <div className="absolute top-4 right-4 md:top-6 md:right-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                                    <div className="px-5 py-3 rounded-2xl bg-white/20 backdrop-blur-md text-white font-semibold border border-white/30 shadow-lg">
                                        {text.date}
                                    </div>
                                </div>

                                {/* Title on Image - Enhanced */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-rose-400 to-pink-500" />
                                        <div className="w-3 h-3 rounded-full bg-rose-400 animate-pulse" />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                                        {text.opportunityTitle}
                                    </h3>
                                </div>
                            </div>

                            {/* Content Section - Enhanced */}
                            <div className="p-6 md:p-10">
                                {/* Date, Time & Location Info - Enhanced with animations */}
                                <div className="flex flex-wrap gap-3 mb-8">
                                    <div className="px-5 py-3 rounded-2xl bg-gradient-to-r from-primary/10 to-emerald-500/10 text-primary font-semibold border border-primary/20 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                                        {text.date}
                                    </div>
                                    <div className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 font-semibold border border-amber-200/50 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                                        {text.time}
                                    </div>
                                    <a
                                        href={text.locationUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 font-semibold border border-blue-200/50 transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:from-blue-200 hover:to-indigo-200 cursor-pointer flex items-center gap-2"
                                    >
                                        {text.location}
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>

                                {/* Description - Enhanced with better styling */}
                                <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                                    <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                                        {text.description}
                                    </p>
                                </div>

                                {/* CTAs - Enhanced with hover animations */}
                                <div className="flex flex-wrap gap-3 mb-8">
                                    <span className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 font-semibold shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default">
                                        {text.cta1}
                                    </span>
                                    <span className="px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 font-semibold shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default">
                                        {text.cta2}
                                    </span>
                                </div>

                                {/* Final Call - Enhanced with gradient border */}
                                <div className="relative mb-8 group/call">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-rose-500/30 to-pink-500/30 rounded-2xl blur opacity-50 group-hover/call:opacity-75 transition-opacity duration-300" />
                                    <div className="relative text-center p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-rose-500/5 to-pink-500/5 border border-primary/10">
                                        <p className="text-xl font-semibold text-gray-800 whitespace-pre-line leading-relaxed">
                                            {text.finalCall}
                                        </p>
                                    </div>
                                </div>

                                {/* Register Button - Enhanced with glow effect */}
                                <div className="text-center">
                                    <div className="inline-block relative group/btn">
                                        {spotsRemaining > 0 && (
                                            <div className="absolute -inset-2 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full blur-lg opacity-40 group-hover/btn:opacity-60 transition-opacity duration-300 animate-pulse" />
                                        )}
                                        <button
                                            onClick={() => {
                                                if (spotsRemaining > 0) {
                                                    setShowModal(true);
                                                    setAlreadyRegistered(false);
                                                }
                                            }}
                                            disabled={spotsRemaining <= 0}
                                            className={`relative px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 transform shadow-xl ${spotsRemaining > 0
                                                ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 hover:shadow-2xl hover:scale-105 active:scale-100'
                                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                                }`}
                                        >
                                            {spotsRemaining > 0 ? (
                                                <span className="flex items-center gap-3">
                                                    <span className="text-2xl">🤝</span>
                                                    {text.registerNow}
                                                    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </span>
                                            ) : (
                                                text.registrationClosed
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Registration Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-scale-in">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-rose-500 to-pink-600 p-6 text-white">
                            <h3 className="text-2xl font-bold text-center">{text.form.title}</h3>
                            <p className="text-center text-white/80 mt-1">
                                {spotsRemaining} {text.spotsLeft} 👥
                            </p>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6">
                            {submitted ? (
                                <div className="text-center py-8">
                                    <div className="text-6xl mb-4">🎉</div>
                                    <p className="text-xl text-gray-800 font-medium whitespace-pre-line">
                                        {text.success}
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {alreadyRegistered && (
                                        <div className="p-3 rounded-lg bg-amber-100 text-amber-800 text-center">
                                            ⚠️ {text.alreadyRegistered}
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-1">{text.form.fullName}</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-1">{text.form.phone}</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-1">{text.form.email}</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-1">{text.form.age}</label>
                                        <input
                                            type="number"
                                            name="age"
                                            value={formData.age}
                                            onChange={handleInputChange}
                                            required
                                            min="16"
                                            max="70"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all"
                                        />
                                    </div>

                                    <div className="flex gap-3 pt-4">
                                        <button
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                            className="flex-1 px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all"
                                        >
                                            {text.form.cancel}
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-medium transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-rose-600 hover:to-pink-700'}`}
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                                                </span>
                                            ) : text.form.submit}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default VolunteerOpportunity;
