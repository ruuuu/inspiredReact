import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer.js';


// встроенный стор 
const store = configureStore({  
      reducer: rootReducer,
      devTools: import.meta.env.DEV,  // встроенный middleware нужен только для разработки, свойство DEV встроенно в Vite, чобы увидеть его работу установили расширение Redux DevTools
})



export default store;