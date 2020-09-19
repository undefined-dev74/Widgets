const Route = ({ path, children }) => {
  return window.Location.pathname === path ? children : null;
};

export default Route;
