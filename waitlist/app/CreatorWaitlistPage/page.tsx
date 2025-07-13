'use client';

import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Menu } from '@headlessui/react';
import { FaInstagram, FaTwitter, FaLinkedin, FaSnapchatGhost } from 'react-icons/fa';
import { Inter } from 'next/font/google';
//importing inter font type
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function CreatorWaitlistPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('instagram');
  const [username, setUsername] = useState('');
  const [socials, setSocials] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});

  const [submittedData, setSubmittedData] = useState<null | {
    email: string;
    phone: string;
    socials: Record<string, string>;
    is_creator: boolean;
  }>(null);

  const handleAddSocial = () => {
    if (!username.trim()) return;
    const formattedUsername = username.trim().startsWith('@') ? username.trim() : `@${username.trim()}`; //modify it to add @ if missing
    setSocials({ ...socials, [selectedPlatform]: formattedUsername });
    setUsername('');
  };

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
      is_creator: true,
      email,
      phone,
      socials,
    };
    console.log(payload)
    setSubmittedData(payload);// this triggers useEffect
  };

  // Send data when submittedData is set
  useEffect(() => {
    if (!submittedData) return;

    const sendToBackend = async () => {
      try {
        const response = await fetch('/api/waitlist', {// change this later to actual backend api end point
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submittedData),
        });

        if (!response.ok) {
          throw new Error('Failed to submit waitlist data');
        }

        localStorage.setItem('waitlist-data', JSON.stringify(submittedData));//store locally

        // Navigate to PostWaitlist page
        router.push('/PostWaitlistPage');
      } catch (err) {
        console.error('Submission error:', err);
        alert('Something went wrong. Please try again.');//error pop up 
        setIsSubmitting(false);
      }
    };

    sendToBackend();
  }, [submittedData, router]);

  const getIcon = (platform: string) => {
    switch (platform) {
    case 'instagram':
      return <FaInstagram className="text-pink-500" />;
    case 'twitter':
      return <FaTwitter className="text-blue-400" />;
    case 'linkedin':
      return <FaLinkedin className="text-blue-700" />;
    case 'snapchat':
      return <FaSnapchatGhost className="text-yellow-400" />;
    default:
      return null;
  }
  };

  return (
    <main
      className={`${inter.className} min-h-screen bg-cover bg-center flex items-center justify-center`}
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="relative bg-black backdrop-blur-sm w-full max-w-[650px] rounded-xl p-6 text-white shadow-xl">
        {/* Back arrow */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 text-white hover:text-gray-300 transition"
        >
          ←
        </button>

        <form className="flex flex-col gap-6 mt-16 items-start sm:pl-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Input your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[350px] border-b border-gray-400 px-4 py-2 rounded bg-transparent text-white placeholder:italic placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              name = "phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              pattern="[0-9]*"
              inputMode="numeric"
              className="w-[350px] border-b border-gray-400 px-4 py-2 rounded bg-transparent text-white placeholder:italic placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/* Socials Section */}
          <div>
            <h1 className="font-bold text-white text-2xl mb-2">Social Media Handles</h1>
            <div className="flex items-center gap-4">
              {/* Platform selector */}
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="inline-flex items-center px-4 py-2 bg-[rgb(34,34,34)] text-white rounded hover:bg-gray-700">
                  {getIcon(selectedPlatform)}
                </Menu.Button>
                <Menu.Items className="absolute mt-2 w-20 rounded-md bg-[rgb(34,34,34)] shadow-lg z-10">
                  <div className="p-1">
                    {['instagram', 'twitter', 'linkedin', 'snapchat'].map((platform) => (
                      <Menu.Item key={platform}>
                        {({ active }) => (
                          <button
                            type="button"
                            onClick={() => setSelectedPlatform(platform)}
                            className={`${
                              active ? 'bg-gray-700' : ''
                            } flex items-center w-full px-4 py-2 text-sm text-white`}
                          >
                            {getIcon(platform)}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Menu>

              {/* Username input */}
              <input
                type="text"
                placeholder="@username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-[250px] px-4 py-2 rounded border-b border-gray-300 bg-transparent text-white placeholder:italic placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={handleAddSocial}
                className="p-2 text-[rgb(242,201,76)] text-xl rounded hover:bg-white hover:text-black transition"
              >
                +
              </button>
            </div>

            {/* Show added socials */}
            {Object.keys(socials).length > 0 && (
              <div className="mt-4 space-y-1">
                {Object.entries(socials).map(([platform, handle]) => (
                  <div key={platform} className="text-sm text-gray-300">
                    {getIcon(platform)} <span className="ml-2">@{handle}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit button */}
          <div className="flex justify-center self-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-4 px-8 py-3 w-[150px] h-[50px] text-2xl font-semibold font-sans rounded transition ${
                isSubmitting
                  ? 'bg-gray-500 text-white cursor-not-allowed'
                  : 'bg-white text-black hover:bg-black hover:text-white'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
