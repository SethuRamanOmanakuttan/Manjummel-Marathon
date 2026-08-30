import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import RegisterModal from '../components/RegisterModal';

const RegisterModalContext = createContext(null);

export function RegisterModalProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ openModal }), [openModal]);

  return (
    <RegisterModalContext.Provider value={value}>
      {children}
      <RegisterModal open={open} onClose={closeModal} />
    </RegisterModalContext.Provider>
  );
}

export function useRegisterModal() {
  const ctx = useContext(RegisterModalContext);
  if (!ctx) {
    throw new Error('useRegisterModal must be used within a RegisterModalProvider');
  }
  return ctx.openModal;
}
