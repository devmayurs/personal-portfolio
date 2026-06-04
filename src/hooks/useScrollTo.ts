import { useCallback } from 'react';

const NAV_HEIGHT = 64;

export const useScrollTo = () => {
  const scrollTo = useCallback((id: string): void => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  return { scrollTo };
};
