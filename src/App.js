
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrainList from './TrainList';
import SingleTrain from './SingleTrain';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TrainList} />
        <Route path="/trains/:trainNumber" component={SingleTrain} />
      </Switch>
    </Router>
  );
};

export default App;
