'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import type { ContactContent } from '@/data/contact';

interface BookingFormProps {
  fields: ContactContent['fields'];
  formNote: string;
  successMessage: string;
  errorMessage: string;
}

export default function BookingForm({
  fields,
  formNote,
  successMessage,
  errorMessage,
}: BookingFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('request failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form__row">
        <div className="form__field">
          <label htmlFor="name">{fields.name}</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div className="form__field">
          <label htmlFor="email">{fields.email}</label>
          <input id="email" name="email" type="email" required />
        </div>
      </div>
      <div className="form__row">
        <div className="form__field">
          <label htmlFor="phone">{fields.phone}</label>
          <input id="phone" name="phone" type="tel" />
        </div>
        <div className="form__field">
          <label htmlFor="guests">{fields.guests}</label>
          <input id="guests" name="guests" type="number" min={1} />
        </div>
      </div>
      <div className="form__row">
        <div className="form__field">
          <label htmlFor="checkIn">{fields.checkIn}</label>
          <input id="checkIn" name="checkIn" type="date" />
        </div>
        <div className="form__field">
          <label htmlFor="checkOut">{fields.checkOut}</label>
          <input id="checkOut" name="checkOut" type="date" />
        </div>
      </div>
      <div className="form__field">
        <label htmlFor="message">{fields.message}</label>
        <textarea id="message" name="message" rows={3} />
      </div>
      <div className="form__honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {fields.submit}
      </button>
      {status === 'success' && <p className="form__note form__note--success">{successMessage}</p>}
      {status === 'error' && <p className="form__note form__note--error">{errorMessage}</p>}
      {(status === 'idle' || status === 'sending') && <p className="form__note">{formNote}</p>}
    </form>
  );
}
