import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';
import SignIn from './pages/SignIn';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    Home,
  })
);
