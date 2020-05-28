import React from 'react';

import Routes from './routes';

import NavigationService from './services/navigation';

export default function App() {
  function registerService(ref) {
    NavigationService.setTopLevelNavigator(ref);
  }
  return <Routes ref={registerService} />;
}
