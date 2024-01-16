import React from 'react';
import '../style/Loader.css'; // Import the CSS styles for the loader

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-spinner"></div>
    </div>
  );
};

export default Loader;