import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import { NativeModules } from 'react-native';

const { scriptURL } = NativeModules.SourceCode;
const address = scriptURL.split('://')[1].split('/')[0];
const hostname = address.split(':')[0];
// const port = address.split(':')[1];

const reactotron = Reactotron.configure({
  name: 'react-native',
  host: hostname,
  port: 9090,
})
  .useReactNative({})
  .use(reactotronRedux())
  .connect();
console.tron = Reactotron.log;
export { reactotron };
