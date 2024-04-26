import React from 'react';

const CustomComponent = ({ prop1, prop2, prop3, children }) => {
  return (
    <div>
      <h2>Property 1: {prop1}</h2>
      <p>Property 2: {prop2}</p>
      <p>Property 3: {prop3}</p>
      <div>
        <h3>Children:</h3>
        {children}
      </div>
    </div>
  );
};

// Example usage
const App1 = () => {
  return (
    <CustomComponent prop1="Value 1" prop2="Value 2" prop3="Value 3">
      <p>This is a child component</p>
      <button>Click me</button>
    </CustomComponent>
  );
};

export default App1;
