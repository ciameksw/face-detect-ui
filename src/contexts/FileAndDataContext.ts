import { createContext } from 'react';
import { FileAndDataType } from '../types';

export const FileAndDataContext = createContext<FileAndDataType>({file: null, rawData: null});