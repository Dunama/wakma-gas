import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Automatically scrolls window to top when the route pathname changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use smooth if user has not requested reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
