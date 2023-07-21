
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleTrain } from './TrainService';

const SingleTrain = () => {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    
    getSingleTrain(trainNumber).then((data) => setTrain(data));
  }, [trainNumber]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{train.trainName}</h1>
      {/* Display train details here */}
    </div>
  );
};

export default SingleTrain;
