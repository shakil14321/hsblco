'use client'
import { useLayoutEffect, useState } from 'react';
import debounce from 'lodash/debounce';

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < 1024);
    };

    const debouncedUpdate = debounce(updateSize, 250);
    window.addEventListener('resize', debouncedUpdate);

    // initial check
    updateSize();

    return (): void => window.removeEventListener('resize', debouncedUpdate);
  }, []);

  return isMobile;
};

export default useIsMobile;
