'use client';

import type { HomeContent } from '@/data/home';

interface BookingFormProps {
  fields: HomeContent['booking']['fields'];
  formNote: string;
}

export default function BookingForm({ fields, formNote }: BookingFormProps) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
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
      <button type="submit" className="btn btn-primary">
        {fields.submit}
      </button>
      <p className="form__note">{formNote}</p>
    </form>
  );
}
