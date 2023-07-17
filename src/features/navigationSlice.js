import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CATEGORY_URL } from '../const.js';



export const fetchNavigation = createAsyncThunk(            // для запроса на сервер
      "navigation/fetchNavigation",  //имя задали, имя здолжно быть таким же что и  navigationSlice.name, fetchNavigation-имя редьюсера
      async () => {
            const response = await fetch(CATEGORY_URL);
            const data = await response.json();  // асинхронный метод response.json();
            return data;  
      }
)



// создаем редьюсер
const navigationSlice = createSlice({           // возвращает объект, у него есть свойство reducer и actions   
      name: 'navigation',                       // задаем названеи редьсюеру
      initialState:  {                          // инициализируем state
            activeGender: 'women',              //  в любом компоненте можно обратиться к свойству activeGender
            status: '',                         // статус запроса на сервер
            categories: {},                      // нач значени(получим от сервера  { "men": { title: , banner: , list: [{title: , slug: }] },  "women": { title: , banner: , list: [] },  "kids": { title: , banner: , list: [] } } и в categories запишем,)
            genderList: [],                      // нач значени(получим от сервера и в genderList запишем)
            error: null,
      },
      reducers: {
            setActiveGender: (state, action) => {           // setActiveGender - функция(action)
                 // console.log('action.payload in setActiveGender', action.payload)
                  state.activeGender = action.payload;
            }
      },
      extraReducers: (builder) => {
            builder
                  .addCase(fetchNavigation.pending, (state) => {               // отправка запроса на сервер
                        state.status = 'loading';
                  })  
                  .addCase(fetchNavigation.fulfilled, (state, action) => {    // вытаскиваем action - async() из fetchNavigation
                        state.status = 'success';                             // ответо сервера успешно получен
                        state.categories = action.payload;                    // в action.payload приходит ответ от сервера запиештимся в categories
                        state.genderList = Object.keys(action.payload);       // ['men', 'women']
                  })  
                  .addCase(fetchNavigation.rejected, (state) => {
                        state.status = 'failed',                              // от сервера не получили ответ
                        state.error = action.error.message;
                  })
      }                  
});




export const { setActiveGender } = navigationSlice.actions;

export default navigationSlice.reducer;