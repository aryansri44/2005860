
import axios from 'axios';

const BASE_URL = 'http://20.244.56.144';

const registerCompany = async (companyData) => {

  return {
    companyName: 'Train Central',
    clientID: 'b46128a0-fbde-4c16-a4b1-6ae6ad718e27',
    clientSecret: 'XOyolORPayKBOdAN',
  };
};

const getAuthorizationToken = async (companyData) => {
  // Implement API call to get authorization token
  // Mocked response for now
  return {
    token_type: 'Bearer',
    access_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODI2MjkyNjQsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiYjQ2MTE4ZjAtZmJkZS00YjE2LWE0YjEtNmFlNmFkNzE8YjI3In0.v93QcxrZHWDTnTwm0-6ttoTGI4C65Grhn3rIJDC8fy8',
    expires_in: 1682629264,
  };
};

const getAllTrains = async (token) => {
  // Implement API call to get all trains
  // Mocked response for now
  return [
    {
      trainName: 'Chennai Exp',
      trainNumber: '2344',
      departureTime: {
        Hours: 21,
        Minutes: 35,
        Seconds: 0,
      },
      seatsAvailable: {
        sleeper: 3,
        AC: 1,
      },
      price: {
        sleeper: 2,
        AC: 5,
      },
      delayedBy: 15,
    },
    // Add more trains here...
  ];
};

const getSingleTrain = async (trainNumber, token) => {
  // Implement API call to get a specific train
  // Mocked response for now
  return {
    trainName: 'Delhi Door Hai Exp',
    trainNumber: '2343',
    departureTime: {
      Hours: 9,
      Minutes: 45,
      Seconds: 0,
    },
    seatsAvailable: {
      sleeper: 32,
      AC: 1,
    },
    price: {
      sleeper: 1,
      AC: 723,
    },
    delayedBy: 3,
  };
};

export { registerCompany, getAuthorizationToken, getAllTrains, getSingleTrain };
