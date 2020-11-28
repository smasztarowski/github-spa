import { useDispatch } from 'react-redux';
import { RootDispatch } from '../Root/RootStore/rootStore.interfaces';

export const useAppDispatch = () => useDispatch<RootDispatch>();
