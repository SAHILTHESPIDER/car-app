import { createStore, applyMiddleware ,combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
const rootReducer= combineReducers({
   
})
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware([thunk])
    // other store enhancers if any
  )
);