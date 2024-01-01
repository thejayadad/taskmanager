'use client'
import { useFormStatus } from 'react-dom';

export function SubmitButton({ title }) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`mt-4 btn btn-block bg-primary text-white relative ${pending ? 'loading' : ''}`}
      type="submit"
      aria-disabled={pending}
    >
      {pending ? (
        <>
          <div className="loading-dots bg-secondary">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <span>Loading...</span>
        </>
      ) : (
        title
      )}
    </button>
  );
}

