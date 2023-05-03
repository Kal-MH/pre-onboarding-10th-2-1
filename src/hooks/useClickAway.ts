import { useRef, useEffect } from 'react';

const events = ['click', 'focus'];

interface Props {
  handler: (e: React.MouseEvent) => void;
}

const useClickAway = ({ handler }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const eventHandler = useRef(handler);

  useEffect(() => {
    eventHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleEvent = (e: any) => {
      e.preventDefault();
      e.stopPropagation();

      !element.contains(e.target) && eventHandler.current(e);
    };

    for (const eventName of events) {
      document.addEventListener(eventName, handleEvent);
    }

    return () => {
      for (const eventName of events) {
        document.removeEventListener(eventName, handleEvent);
      }
    };
  }, [ref]);

  return ref;
};

export default useClickAway;
