import { useDispatch, useSelector } from 'react-redux';

import type { TAppDispatch, TRootState } from '@/store/store';

const useAppDispatch = useDispatch.withTypes<TAppDispatch>();
const useAppSelector = useSelector.withTypes<TRootState>();

export { useAppDispatch, useAppSelector };
