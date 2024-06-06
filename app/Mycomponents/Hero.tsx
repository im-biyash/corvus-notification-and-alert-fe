'use client';

import React from 'react';
import { toast } from 'sonner';

const Hero = () => {
  const showAlert = (type: 'error' | 'warning' | 'success' | 'system', message: string) => {
    switch (type) {
      case 'error':
        toast.error(message);
        break;
      case 'warning':
        toast(message, { style: { background: 'yellow', color: 'black' } });
        break;
      case 'success':
        toast.success(message);
        break;
      case 'system':
        toast(message, { style: { background: 'grey', color: 'white' } });
        break;
      default:
        toast(message);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center mx-auto justify-center relative right-[400px]">
        <h2 className="text-3xl font-bold mb-4">Peak Voyage</h2>
        <h1 className="text-xl">Mastering your skills and reaching new heights</h1>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
          onClick={() => showAlert('success', 'Successfully sent message')}
        >
          Get Started
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
          onClick={() => showAlert('error', 'Failed to send the message. Please try again.')}
        >
          Show Error Alert
        </button>
        <button
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg mt-4"
          onClick={() => showAlert('warning', 'Your connection is unstable.')}
        >
          Show Warning Alert
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-lg mt-4"
          onClick={() => showAlert('system', 'Server is down for maintenance.')}
        >
          Show System Alert
        </button>
      </div>
    </div>
  );
};

export default Hero;
