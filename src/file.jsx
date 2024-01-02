import React, { useState } from 'react';

const file = () => {
  const [apiMessage, setApiMessage] = useState('');
  const apiEndpoint = 'https://tiny-jade-cougar-cap.cyclic.app/hello';

  const fetchData = async () => {
    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      setApiMessage(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
      setApiMessage('Error fetching data');
    }
  };

  return (
    <div>
      <h1 className='text-4xl bg-cyan-400 px-2 py-2'>API Call Example</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {apiMessage && (
        <div>
          <h2>API Response:</h2>
          <pre>{JSON.stringify({ message: apiMessage }, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default file;
