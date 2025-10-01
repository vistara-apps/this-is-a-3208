import React from 'react';

const MyComponent = () => {
  let windowWidth;
  if (typeof window !== 'undefined') {
    windowWidth = window.innerWidth;
  }

  return (
    <div>
      {windowWidth ? `Window width is ${windowWidth}` : 'Window object is not available'}
    </div>
  );
};

export default MyComponent;