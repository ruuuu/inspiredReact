import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer.js';


// встроенный стор 
const store = configureStore({  
      reducer: rootReducer,
      devTools: import.meta.env.DEV,  // встроенный middleware нужен для разработки, свойство DEV встроенно в Vite
})



export default store;