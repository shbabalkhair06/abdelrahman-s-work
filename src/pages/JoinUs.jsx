import { useState, useContext } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

const JoinUs = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].join;
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    phone: '',
    city: '',
    email: '',
    experience: '',
    reason: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = language === 'ar' ? 'الاسم مطلوب' : 'Full name is required';
    }
    if (!formData.age || parseInt(formData.age) < 1) {
      newErrors.age = language === 'ar' ? 'العمر مطلوب' : 'Age is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = language === 'ar' ? 'رقم الهاتف مطلوب' : 'Phone number is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = language === 'ar' ? 'المدينة مطلوبة' : 'City is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = language === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = language === 'ar' ? 'البريد الإلكتروني غير صحيح' : 'Invalid email format';
    }
    if (!formData.experience) {
      newErrors.experience = language === 'ar' ? 'يرجى الإجابة على السؤال' : 'Please answer this question';
    }
    if (!formData.reason.trim()) {
      newErrors.reason = language === 'ar' ? 'سبب الانضمام مطلوب' : 'Reason for joining is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit to Formspree
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xreznypq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          age: formData.age,
          phone: formData.phone,
          city: formData.city,
          email: formData.email,
          experience: formData.experience === 'yes' 
            ? (language === 'ar' ? 'نعم' : 'Yes') 
            : (language === 'ar' ? 'لا' : 'No'),
          reason: formData.reason,
          _subject: language === 'ar' 
            ? `طلب انضمام جديد - ${formData.fullName}` 
            : `New Join Request - ${formData.fullName}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          age: '',
          phone: '',
          city: '',
          email: '',
          experience: '',
          reason: '',
        });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        const data = await response.json();
        setErrorMessage(
          language === 'ar' 
            ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.' 
            : 'An error occurred while sending. Please try again.'
        );
      }
    } catch (error) {
      setErrorMessage(
        language === 'ar' 
          ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.' 
          : 'An error occurred while sending. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-gray-50 pt-24">
        <div className="container-custom">
          <SectionTitle title={t.title} subtitle={t.subtitle} />
          
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-8 rounded-lg text-center">
                <div className="text-5xl mb-4">✅</div>
                <p className="text-xl font-semibold">{t.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                {errorMessage && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                    <p>{errorMessage}</p>
                  </div>
                )}
                <div className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-black font-semibold mb-2">
                      {t.form.fullName} *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Age */}
                  <div>
                    <label htmlFor="age" className="block text-black font-semibold mb-2">
                      {t.form.age} *
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      min="1"
                      required
                      disabled={loading}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.age ? 'border-red-500' : 'border-gray-300'
                      } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    />
                    {errors.age && (
                      <p className="text-red-500 text-sm mt-1">{errors.age}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-black font-semibold mb-2">
                      {t.form.phone} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* City */}
                  <div>
                    <label htmlFor="city" className="block text-black font-semibold mb-2">
                      {t.form.city} *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.city ? 'border-red-500' : 'border-gray-300'
                      } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-black font-semibold mb-2">
                      {t.form.email} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-black font-semibold mb-2">
                      {t.form.experience} *
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="experience"
                          value="yes"
                          checked={formData.experience === 'yes'}
                          onChange={handleChange}
                          required
                          disabled={loading}
                          className="mr-2"
                        />
                        {t.form.yes}
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="experience"
                          value="no"
                          checked={formData.experience === 'no'}
                          onChange={handleChange}
                          required
                          disabled={loading}
                          className="mr-2"
                        />
                        {t.form.no}
                      </label>
                    </div>
                    {errors.experience && (
                      <p className="text-red-500 text-sm mt-1">{errors.experience}</p>
                    )}
                  </div>

                  {/* Reason */}
                  <div>
                    <label htmlFor="reason" className="block text-black font-semibold mb-2">
                      {t.form.reason} *
                    </label>
                    <textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      rows="4"
                      required
                      disabled={loading}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.reason ? 'border-red-500' : 'border-gray-300'
                      } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    ></textarea>
                    {errors.reason && (
                      <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={loading}
                    className={`btn-primary w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {loading 
                      ? (language === 'ar' ? 'جاري الإرسال...' : 'Sending...') 
                      : t.form.submit
                    }
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
  );
};

export default JoinUs;