import{ createstore,applyMiddleware,combineReducers} from 'redux';
import{ composewithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { carsReducer } from './reducers/carsReducer';


const initialData=
{
car:[]
};
export const carsReducer = (state=initialData,action)=>{
   switch (action.type) {
      
   
      default:return state
         
   }
}

