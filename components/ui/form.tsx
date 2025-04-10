'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [responseMessage, setResponseMessage] = useState('');

  const onSubmit = async (data: any) => {
    setResponseMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setResponseMessage(result.success);
        reset(); // Reset form after successful submission
      } else {
        setResponseMessage(result.error || 'Something went wrong');
      }
    } catch (error) {
      setResponseMessage('Error submitting the form');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        {...register('name', { required: 'Name is required' })}
        className="w-full p-2 border rounded"
      />
      {errors.name && errors.name.message && <p className="text-red-500">{String(errors.name.message)}</p>}

      <input
        type="email"
        placeholder="Your Email"
        {...register('email', { required: 'Email is required' })}
        className="w-full p-2 border rounded"
      />
      {errors.email && <p className="text-red-500">{String(errors.email.message)}</p>}

      <textarea
        placeholder="Your Message"
        {...register('message', { required: 'Message is required' })}
        className="w-full p-2 border rounded"
      />
      {errors.message && <p className="text-red-500">{String(errors.message.message)}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {responseMessage && <p className="text-green-500">{responseMessage}</p>}
    </form>
  );
}
