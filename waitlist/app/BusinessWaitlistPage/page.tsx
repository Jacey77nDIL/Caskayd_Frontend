'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Inter } from 'next/font/google';
//importing inter font type
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function BusinessWaitlistPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

   const [submittedData, setSubmittedData] = useState<null | {
    email: string;
    phone: string;
    category: string;
    is_creator: boolean;
  }>(null);

  const [errors, setErrors] = useState<{ email?: string; phone?: string; }>({});

  const validateForm = () => {
    const newErrors: { email?: string; phone?: string } = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      newErrors.phone = 'Phone number must be 10 to 15 digits';
    }

    

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    const payload = {
      is_creator: false,
      email,
      phone,
      category,
    };
    console.log('Form data:', payload);// prints it out in the console when the submit button is pressed
    setSubmittedData(payload)// this is what Triggers the useEffect to send data
  };

   useEffect(() => {
    if (!submittedData) return;

    const sendToBackend = async () => {
      try {
        const response = await fetch('https://caskayd-backend-staging.onrender.com/register/', {// change this later to actual backend api end point
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submittedData),
        });

        if (!response.ok) {
          throw new Error('Failed to submit waitlist data');
        }

        localStorage.setItem('waitlist-data', JSON.stringify(submittedData));// store locally

        // Navigate to PostWaitlist page
        router.push('/PostWaitlistPage');
      } catch (err) {
        console.error('Error submitting data:', err);
        alert('Something went wrong. Please try again.');//error pop up 
        setIsSubmitting(false);
      }
    };

    sendToBackend();
  }, [submittedData, router]);

  return (
    <main
      className={`${inter.className} min-h-screen bg-cover bg-center flex items-center justify-center px-4`}
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="relative bg-black backdrop-blur-sm w-full max-w-[650px] rounded-xl p-6 text-white shadow-xl">
        {/* Back arrow */}
        <button
          onClick={() => router.back()}
          className="ml-8 absolute top-4 left-4 text-3xl text-white hover:text-gray-300 hover:scale-110 hover:shadow-lg transition-transform duration-300"
        >
          ←
        </button>

        {/* Form content */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 mt-16 items-start sm:pl-6"
        >
          {/*code for email input flied*/}
          <div className="w-full sm:w-[350px]">
            <input
              autoComplete="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Input your email"
              className="w-full border-b border-gray-400 px-4 py-2 bg-transparent text-white  placeholder-gray-400 focus:outline-none"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/*code for phone number input flied*/}
          <div className="w-full sm:w-[350px]">
            <input
              autoComplete="tel"
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Input your number"
              pattern="[0-9]*"
              inputMode="numeric"
              className="w-full border-b border-gray-400 px-4 py-2 bg-transparent text-white  focus:outline-none "
              required
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/*code for category drop down box*/}
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full sm:w-[250px] px-4 py-2 rounded-lg bg-[rgb(36,36,36)] text-white"
            required
          >
            <option value=""disabled hidden>Business category</option>
            <option value="Products and Retail">Products and Retail</option>
            <option value="Fashion">Fashion</option>
            <option value="Beauty and personal care">Beauty and personal care</option>
            <option value="Service">Service</option>
            <option value="Events and Entertainment">Events and Entertainment</option>
            <option value="Finance and Business Opportunities">Finance and Business Opportunities</option>
            <option value="Technology and innovation">Technology and innovation</option>



          </select>

          {/*code for submit button*/}
          <button
              type="submit"
              disabled={isSubmitting}
              className={`self-center mt-4 px-8 py-3 w-[150px] h-[50px] text-2xl font-semibold font-sans rounded transition-transform duration-300 bg-white text-black hover:scale-110 hover:shadow-lg`}>
                Submit
            </button>
        </form>
      </div>
    </main>
  );
}
