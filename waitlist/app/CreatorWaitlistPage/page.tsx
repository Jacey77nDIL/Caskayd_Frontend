'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Menu } from '@headlessui/react';
import {
  FaInstagram,
  FaTwitter,
  FaSnapchatGhost,
  FaChevronDown,
} from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function CreatorWaitlistPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [socialInputs, setSocialInputs] = useState([
    { platform: 'instagram', username: '' },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});
  const [socialError, setSocialError] = useState('');

  const [submittedData, setSubmittedData] = useState<null | {
    email: string;
    phone: string;
    socials: Record<string, string>;
    is_creator: boolean;
  }>(null);

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

    const formattedSocials = Object.fromEntries(
      socialInputs
        .filter((s) => s.username.trim() !== '')
        .map((s) => [
          s.platform,
          s.username.trim().startsWith('@')
            ? s.username.trim()
            : '@' + s.username.trim(),
        ])
    );

    const payload = {
      is_creator: true,
      email,
      phone,
      socials: formattedSocials,
    };

    console.log(payload);
    setSubmittedData(payload);
  };

  useEffect(() => {
    if (!submittedData) return;

    const sendToBackend = async () => {
      try {
        const response = await fetch('https://caskayd-backend-staging.onrender.com/register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submittedData),
        });

        if (!response.ok) {
          throw new Error('Failed to submit waitlist data');
        }

        localStorage.setItem('waitlist-data', JSON.stringify(submittedData));
        router.push('/PostWaitlistPage');
      } catch (err) {
        console.error('Submission error:', err);
        alert('Something went wrong. Please try again.');
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
      case 'tiktok':
        return <SiTiktok className="text-white" />;
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
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="ml-5 text-3xl p-3 absolute top-4 left-4 text-white hover:text-gray-300 hover:scale-110 hover:shadow-lg transition-transform duration-300"
        >
          ←
        </button>

        <form
          className="flex flex-col gap-6 mt-16 items-start sm:pl-6"
          onSubmit={handleSubmit}
        >
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Input your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[350px] border-b border-gray-400 px-4 py-2 rounded bg-transparent text-white placeholder-gray-400 focus:outline-none"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              pattern="[0-9]*"
              inputMode="numeric"
              className="w-[350px] border-b border-gray-400 px-4 py-2 rounded bg-transparent text-white placeholder-gray-400 focus:outline-none"
              required
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* Social Inputs Section */}
          <div>
            <h1 className="font-bold text-white text-2xl mb-2">
              Social Media Handles
            </h1>

            {socialInputs.map((input, index) => (
              <div key={index} className="flex items-center gap-3 mb-4">
                {/* Platform Dropdown */}
                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(34,34,34)] text-white rounded hover:bg-gray-700">
                    {getIcon(input.platform)}
                    <FaChevronDown className="text-sm ml-3" />
                  </Menu.Button>
                  <Menu.Items className="absolute mt-2 w-14 rounded-md bg-[rgb(34,34,34)] shadow-lg z-10">
                    <div className="p-1">
                      {['instagram', 'twitter', 'tiktok', 'snapchat'].map((platform) => {
                        const isDisabled = socialInputs.some(
                          (s, i) => s.platform === platform && i !== index
                        );
                        return (
                          <Menu.Item key={platform}>
                            {({ active }) => (
                              <button
                                type="button"
                                disabled={isDisabled}
                                onClick={() => {
                                  const updated = [...socialInputs];
                                  updated[index].platform = platform;
                                  setSocialInputs(updated);
                                }}
                                className={`${
                                  active ? 'bg-gray-700' : ''
                                } flex items-center w-full px-4 py-2 text-sm ${
                                  isDisabled ? 'text-gray-500 cursor-not-allowed' : 'text-white'
                                }`}
                              >
                                {getIcon(platform)}
                              </button>
                            )}
                          </Menu.Item>
                        );
                      })}
                    </div>
                  </Menu.Items>
                </Menu>

                {/* Username Input */}
                <input
                  type="text"
                  placeholder="@username"
                  value={input.username}
                  onChange={(e) => {
                    const updated = [...socialInputs];
                    updated[index].username = e.target.value;
                    setSocialInputs(updated);
                    setSocialError(''); // clear on typing
                  }}
                  className="w-[230px] px-4 py-2 rounded border-b border-gray-300 bg-transparent text-white placeholder:italic placeholder-gray-400 focus:outline-none"
                />

                {/* Remove Button */}
                {socialInputs.length > 1 && (
                  <button
                    type="button"
                    onClick={() =>
                      setSocialInputs(socialInputs.filter((_, i) => i !== index))
                    }
                    className="text-red-400 text-sm hover:text-white transition"
                  >
                    ❌
                  </button>
                )}

                {/* Add Button */}
                {index === socialInputs.length - 1 && socialInputs.length < 4 && (
                  <button
                    type="button"
                    onClick={() => {
                      if (input.username.trim() === '') {
                        setSocialError('Please enter a username before adding another.');
                        return;
                      }

                      const platformsSelected = socialInputs.map((s) => s.platform);
                      const availablePlatforms = ['instagram', 'twitter', 'tiktok', 'snapchat'].filter(
                        (p) => !platformsSelected.includes(p)
                      );

                      if (availablePlatforms.length === 0) {
                        setSocialError('You’ve reached the maximum of 4 platforms.');
                        return;
                      }

                      setSocialError('');
                      setSocialInputs([
                        ...socialInputs,
                        { platform: availablePlatforms[0], username: '' },
                      ]);
                    }}
                    className="text-[rgb(242,201,76)] text-2xl rounded hover:bg-white hover:text-black transition px-2 py-1"
                    title="Add another handle"
                  >
                    +
                  </button>
                )}
              </div>
            ))}

            {/* Social error */}
            {socialError && (
              <p className="text-red-500 text-sm mt-1">{socialError}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center self-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-4 px-8 py-3 w-[150px] h-[50px] text-2xl font-semibold font-sans rounded transition-transform duration-300 bg-white text-black hover:scale-110 hover:shadow-lg`}>
                Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
