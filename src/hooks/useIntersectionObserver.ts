import { useCallback, useEffect, useRef } from 'react';

// Define the type for the observer callback
export interface ObserverEntry extends IntersectionObserverEntry {
  target: Element;
}

const useIntersectionObserver = (callback: (entry: ObserverEntry) => void, options: IntersectionObserverInit) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!observer.current) {
      observer.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => callback(entry as ObserverEntry));
      }, options);
    }
    // TODO: This line breaks the code but excluding might cause memory leaks FIXME
    // return () => observer.current?.disconnect();
  }, [callback, options, observer]);

  const observe = useCallback((element: Element | null) => {
    if (element) {
      observer.current?.observe(element);
    }
  }, []);

  const unobserve = useCallback((element: Element | null) => {
    if (element) {
      observer.current?.unobserve(element);
    }
  }, []);

  return { observe, unobserve };
};

export default useIntersectionObserver;
