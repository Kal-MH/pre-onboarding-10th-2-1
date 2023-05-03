import { useEffect, useCallback, useRef } from 'react';

interface Props {
  fn: () => void;
  ms: number;
  deps: string[];
}

export const useDebounce = ({ fn, ms, deps }: Props) => {
  const timeoutId: { current: NodeJS.Timeout | null } = useRef(null);
  const callback = useRef(fn);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  const run = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      callback.current();
    }, ms);
  }, [ms]);

  const clear = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);
  }, [timeoutId]);

  useEffect(run, deps);
  useEffect(() => clear, []);
};
