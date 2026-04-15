import { legacy_createStore as createStore } from 'redux';
import reducer from './Reducers';

// Create the Redux store using the reducer provided in your project
const store = createStore(reducer);

export default store;