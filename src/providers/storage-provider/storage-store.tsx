import create from 'zustand';

import { localStorage } from '../../storage';

export interface StorageStore {
  values: Record<string, string | null>;
  setValues: (values: Record<string, string | null>) => void;
}
export const createStorageStore = () => {
  const values: Record<string, string | null> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key !== null) {
      values[key] = localStorage.getItem(key);
    }
  }
  return create<StorageStore>((set) => ({
    values,
    setValues(values) {
      Object.entries(values).forEach(([key, value]) => {
        if (value === null) {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, value);
        }
      });
      return set((old) => {
        return {
          values: {
            ...old.values,
            ...values,
          },
        };
      });
    },
  }));
};

export const useStorageStore = createStorageStore();
