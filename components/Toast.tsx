'use client';

import { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, type, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [onClose, duration]);

  return (
    <div className={`qc-toast qc-toast--${type}`} role="alert">
      <span className="qc-toast-icon" aria-hidden>
        {type === 'success' ? '✓' : '✕'}
      </span>
      <span className="qc-toast-message">{message}</span>
      <button className="qc-toast-close" onClick={onClose} aria-label="Close">
        ×
      </button>
    </div>
  );
}
