
import { useEffect } from 'react';

export const useScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Check if element is in viewport
        if(position.top < window.innerHeight - 100) {
          element.classList.add('show');
        }
      });
    };
    
    // Run once on initial load
    setTimeout(() => {
      handleScroll();
    }, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useScroll;
