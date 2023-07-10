import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { COLORS_URL } from '../const.js';



export const fetchColors = createAsyncThunk(            // для запроса на сервер
      "color/fetchColors",  //имя здолжно быть таким же что и colorSlice.name (fetchColors - имя для  редьюсера)
      async () => {
            const response = await fetch(COLORS_URL);
            const data = await response.json();
            return data;  
      }
)


// создаем редьюсер
export const colorSlice = createSlice({           // возвращает объект, у него есть свойство reducer и actions   
      name: 'color',                       // задаем названеи редьсюеру
      initialState:  {                          // инициализируем state
            status: '',                         // статус запроса на сервер
            colorList: [],                      // нач значени, ответ от  сервера сюда запишем
            error: null,
      },
      extraReducers: (builder) => {
            builder
                  .addCase(fetchColors.pending, (state) => {               // отправка запроса на сервер
                        state.status = 'loading';
                  })  
                  .addCase(fetchColors.fulfilled, (state, action) => {    // вытаскиваем action - async() из fetchNavigation
                        state.status = 'success';
                        state.colorList = action.payload;       // ответ от сервера [{id, title, code}, {}]
                  })  
                  .addCase(fetchColors.rejected, (state, action) => {
                        state.status = 'failed',
                        state.error = action.error.message;
                  })
      }                  
});




export const { setActiveGender } = colorSlice.actions;

export default colorSlice.reducer;