import { combineReducers }  from '@reduxjs/toolkit';
import navigationReducer from './features/navigationSlice.js';  // нзв navigationReducer придумали
import colorReducer from './features/colorSlice.js';
import goodsReducer from './features/goodsSlice.js';
import productReducer from './features/productSlice.js';


export const rootReducer = combineReducers({  
      navigation: navigationReducer,  // свойсво navigation придумали сами
      color: colorReducer,
      goods: goodsReducer,                      // название  goods берем из goodSlice.name
      product: productReducer,
});

