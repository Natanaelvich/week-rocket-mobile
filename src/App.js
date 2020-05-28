import React from 'react';

import { useSelector } from 'react-redux';
import createNavigator from './routes';

import NavigationService from './services/navigation';

export default function App() {
  function registerService(ref) {
    NavigationService.setTopLevelNavigator(ref);
  }

  const { authCheckd } = useSelector(state => state.user);
  const { signedIn } = useSelector(state => state.user);

  if (!authCheckd) return null;

  const Routes = createNavigator(signedIn);

  return <Routes ref={registerService} />;
}
