import { createContext } from 'react';
import { FaceDataContextType } from '../types';

export const FaceDataContext = createContext<FaceDataContextType | undefined>(undefined);