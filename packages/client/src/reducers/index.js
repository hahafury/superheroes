import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';


const appReducer = combineReducers({
  heroesReducer: heroesReducer
});

export default appReducer;
