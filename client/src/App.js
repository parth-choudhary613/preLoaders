// App.js
import React, { useState, useEffect } from 'react';
import Loader3D from './Loader3D'; // Import the loader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time of 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer when component unmounts
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader3D /> // Show loader while loading is true
      ) : (
        <div>
          {/* Main content of your app */}
          <h1>Welcome to the Next Page!</h1>
        </div>
      )}
    </div>
  );
}

export default App;
