import { createStore } from 'redux';
import { createreducer } from './reducer';

const store = createStore(createreducer)
export default store;