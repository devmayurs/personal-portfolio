import { useDispatch, useSelector } from 'react-redux';
import type { TRootState, TAppDispatch } from './index';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector = <T>(selector: (state: TRootState) => T): T =>
  useSelector<TRootState, T>(selector);
