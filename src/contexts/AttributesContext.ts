import { createContext } from 'react';
import { AttributesContextType } from '../types';

export const AttributesContext = createContext<AttributesContextType | undefined>(undefined); // TODO CHANGE THE NAME