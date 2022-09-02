import { useState } from "react";

type UseLocalStorageProps<T> = {
  key: string;
  defaultValue: T;
};

export const useLocalStorage = <T extends string>({
  key,
  defaultValue,
}: UseLocalStorageProps<T>) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);

      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.log(error);
      return defaultValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  const removeValue = () => {
    localStorage.removeItem(key);
  };

  return [storedValue, setValue, removeValue] as const;
};
