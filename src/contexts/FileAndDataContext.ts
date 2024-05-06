import { createContext } from 'react';
import { PhotoAndDataType } from '../types';

export const FileAndDataContext = createContext<PhotoAndDataType>({file: null, data: null});