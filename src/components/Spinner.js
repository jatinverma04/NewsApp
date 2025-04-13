import React from 'react';
import loadingSpinner from './spinner.gif'; // Import the GIF

const Spinner = () => {
  return (
    <div className="text-center my-3"> {/* Added margin */}
      <img src={loadingSpinner} alt="Loading..." /> {/* Display the GIF */}
    </div>
  );
}

export default Spinner;
