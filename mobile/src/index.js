import React from 'react';
import { YellowBox } from 'react-native';

console.reportErrorsAsExceptions = false;

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

import Routes from './routes';

function App(){
  return (
    <Routes />
  );
}

export default App;
