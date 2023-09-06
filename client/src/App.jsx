import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [filter1, setFilter1] = useState('');
  const [filter2, setFilter2] = useState('');
  const [data, setData] = useState([]);


  // this is the get request using axios
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/data', {
        params: { filter1, filter2 }
      });
      setData(response.data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  return (
    <div>
      <input placeholder="Filter 1" className="input-spacing" value={filter1} onChange={e => setFilter1(e.target.value)} />
      <input placeholder="Filter 2" className="input-spacing" value={filter2} onChange={e => setFilter2(e.target.value)} />
      <button onClick={fetchData}>Fetch Data</button>

      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              <td>{row.column1}</td>
              <td>{row.column2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
