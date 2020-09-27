import {  useEffect } from 'react';
const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(() => {
    
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    };
    window.addEventListener('popstate', onLocationChange);
     return () => {
       window.removeEventListener(PopState, onLocationChange);
     };
  }, []);
  return currentPath === path ? children : null;
  
 
};

export default Route;
