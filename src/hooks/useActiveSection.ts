import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import { setActiveSection } from '../store/slices/uiSlice';
import { ESection } from '../types';

export const useActiveSection = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id as ESection;
            if (Object.values(ESection).includes(sectionId)) {
              dispatch(setActiveSection(sectionId));
            }
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [dispatch]);
};
