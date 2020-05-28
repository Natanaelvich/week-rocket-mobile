import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';
import SignIn from './pages/SignIn';

export default function createNavigator(isLoggedIn) {
  return createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        Home,
      },
      {
        initialRouteName: isLoggedIn ? 'Home' : 'SignIn',
      }
    )
  );
}
