import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CATEGORY_URL } from '../const.js';



export const fetchNavigation = createAsyncThunk(
      "navigation/fetchNavigation",  //имя задали
      async () => {
            const response = await fetch(CATEGORY_URL);
            const data = await response.json();
            return data;  
      }
)


// создаем редьюсер
const navigationSlice = createSlice({           // возвращает объект, у него есть свойство reducer и actions   
      name: 'navigation',                       // задаем названеи редьсюеру
      initialState:  {                          // инициализируем state
            activeGender: 'women',              //  в любом компоненте можно обратиться к свойству activeGender
            status: '',                         // статус запроса на сервер
            categories: {},                      // нач значени
            genderList: [],                      // нач значени
            error: null
      },
      reduсers: {
            setActiveGender: (state, action) => {           // setActiveGender - функция(action)
                  state.activeGender = action.payload;
            }
      },
      extraReducers: (builder) => {
            builder
                  .addCase(fetchNavigation.pending, (state) => {               // отправка запроса на сервер
                        state.status = 'loading';
                  })  
                  .addCase(fetchNavigation.fulfilled, (state, action) => {    // вытаскиваем action - async() из fetchNavigation
                        state.status = 'success';
                        state.categories = action.payload;                    // получим ответ от сервера запиештимся в categories
                        state.genderList = Object.keys(action.payload);       // ['men', 'women']
                  })  
                  .addCase(fetchNavigation.rejected, (state) => { 
                        state.status = 'failed',
                        state.error = action.error.message;
                  })
      }                  
});




export const { setActiveGender } = navigationSlice.actions;

export default navigationSlice.reducer;