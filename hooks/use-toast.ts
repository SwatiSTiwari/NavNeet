import { useState, useCallback } from 'react';

interface Toast {
  id: number;
  title: string;
  description: string;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback(({ title, description, duration = 5000 }: Omit<Toast, 'id'> & { duration?: number }) => {
    const id = Date.now();
    setToasts(prevToasts => [...prevToasts, { id, title, description }]);
    setTimeout(() => {
      setToasts(prevToasts => prevToasts.filter(t => t.id !== id));
    }, duration);
  }, []);

  return { toast, toasts };
};
