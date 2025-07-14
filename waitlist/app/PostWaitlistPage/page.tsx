'use client'; // only if using App Router

import { useRouter } from 'next/navigation';
import { Inter } from 'next/font/google';
//importing inter font type
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function FlipFormPage() {
  const router = useRouter();

  return (
    <main className={`${inter.className} min-h-screen bg-cover bg-center flex items-center justify-center`}
      style={{ backgroundImage: "url('/bg.jpg')" }}>
      {/* Black card container */}
      <div className="relative bg-black backdrop-blur-sm w-[650px] h-[433px] max-w-none rounded-xl p-6 text-white shadow-xl">
        <button
          onClick={() => router.back()}
          className="ml-15 absolute top-4 left-4 text-white hover:text-gray-300 transition mb-5"
        >
          ←
        </button>
        <h1 className="text-3xl font-bold mb-10 text-center mt-10">You’re On The List!</h1>
        <p className="text-[21px] font-extralight max-w-[800px] mb-6 text-center">
            Thank you for joining our waitlist! We`re thrilled to have you. We`ll keep you updated with exclusive news, early insights, and notify you as soon as our platform is ready. Get ready to transform your advertising.
        </p>
      </div>
    </main>
  );
}
