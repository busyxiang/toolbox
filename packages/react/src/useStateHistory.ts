import { useState, useRef, useCallback } from "react";

export const useStateHistory = <T>({ initialValue }: { initialValue?: T }) => {
  const [state, setInnerState] = useState<T | undefined>(initialValue);
  const stateHistory = useRef<T[]>(initialValue ? [initialValue] : []);

  const setState = useCallback((value: T) => {
    setInnerState(value);
    stateHistory.current.push(value);
  }, []);

  return [state, setState, stateHistory.current] as const;
};
