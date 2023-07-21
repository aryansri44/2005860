
import React, { useEffect, useState } from 'react';
import { getAllTrains } from './TrainService';

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    
    getAllTrains().then((data) => setTrains(data));
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      {/* Display trains in the required format */}
    </div>
  );
};

export default TrainList;
