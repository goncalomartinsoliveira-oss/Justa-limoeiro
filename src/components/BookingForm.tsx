'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import type { ContactContent } from '@/data/contact';

interface BookingFormProps {
  fields: ContactContent['fields'];
  formNote: string;
  successMessage: string;
  errorMessage: string;
  capacityMessage: string;
}

const MAX_GUESTS = 8;

export default function BookingForm({
  fields,
  formNote,
  successMessage,
  errorMessage,
  capacityMessage,
}: BookingFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'invalid'>(
    'idle',
  );
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const maxAdults = MAX_GUESTS - children;
  const maxChildren = MAX_GUESTS - adults;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    if (adults + children > MAX_GUESTS) {
      setStatus('invalid');
      return;
    }

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
      setAdults(1);
      setChildren(0);
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
      <div className="form__field">
        <label htmlFor="phone">{fields.phone}</label>
        <input id="phone" name="phone" type="tel" />
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
      <div className="form__row">
        <div className="form__field">
          <label htmlFor="adults">{fields.adults}</label>
          <input
            id="adults"
            name="adults"
            type="number"
            min={1}
            max={maxAdults}
            value={adults}
            onChange={(e) => setAdults(Math.min(maxAdults, Math.max(1, Number(e.target.value))))}
            required
          />
        </div>
        <div className="form__field">
          <label htmlFor="children">{fields.children}</label>
          <input
            id="children"
            name="children"
            type="number"
            min={0}
            max={maxChildren}
            value={children}
            onChange={(e) => setChildren(Math.min(maxChildren, Math.max(0, Number(e.target.value))))}
          />
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
      {status === 'success' && (
        <div className="form__alert form__alert--success" role="status">
          {successMessage}
        </div>
      )}
      {(status === 'error' || status === 'invalid') && (
        <div className="form__alert form__alert--error" role="alert">
          {status === 'invalid' ? capacityMessage : errorMessage}
        </div>
      )}
      {(status === 'idle' || status === 'sending') && <p className="form__note">{formNote}</p>}
    </form>
  );
}
