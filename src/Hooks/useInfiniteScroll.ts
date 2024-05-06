import React, { useEffect, useRef } from "react";

const useInfiniteScroll = (callback?: () => void) => {
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          callback?.();
        }
      },
      { threshold: 1 },
    );
    console.log('123 inside useEffect', observer);
    const element = observerRef.current;
    if (element) {
      observer.observe(element);
    }
  
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [callback]);

  return observerRef;
};

export default useInfiniteScroll;