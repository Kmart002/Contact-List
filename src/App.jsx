

import React, { useState, useEffect } from 'react';

const Table = () => {
  const [data, setData] = useState("table");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData('https://jsonplaceholder.typicode.com/users');
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className='myStyles'>
      {/* Display the retrieved data */}
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Full Name</th>
            <th>Email Address</th>
            <th> Phone Number</th>
            <th>Street</th>

          </tr>
        </thead>
      {data && (
          data.map((item,index) => (
              <tr key={item.id}>
                <td>{index +1}</td>
                <td>{item.name} </td>
                <td>{item.email} </td>
                <td>{item.phone} </td>
                <td>{item.address?.street} </td>
              </tr>
            // <li key={item.id}>{item.name}</li>
            ))
            )}
            </table>
    </div>
  );
};
export default Table;












