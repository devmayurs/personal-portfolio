import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleThemeMode, setThemeMode } from '../store/slices/uiSlice';
import { EThemeMode } from '../types';

export const useThemeMode = () => {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.ui.themeMode);

  const toggle = useCallback(() => {
    dispatch(toggleThemeMode());
  }, [dispatch]);

  const setMode = useCallback(
    (mode: EThemeMode) => {
      dispatch(setThemeMode(mode));
    },
    [dispatch],
  );

  return { themeMode, toggle, setMode };
};
