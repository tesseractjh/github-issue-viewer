import { useEffect, useState } from 'react';

function useIntersectionObserver(api) {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    if (target) {
      const intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(async entry => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            await api();
          }
        });
      });
      intersectionObserver.observe(target);
      return () => intersectionObserver.disconnect();
    }
  }, [target, api]);

  return setTarget;
}

export default useIntersectionObserver;
