import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { COLORS_URL } from '../const.js';



export const fetchColors = createAsyncThunk(            // для запроса на сервер
      "color/fetchColors",  //имя здолжно быть таким же что и colorSlice.name (fetchColors - имя для  редьюсера (придумали сами))
      async () => {
            const response = await fetch(COLORS_URL);
            const data = await response.json();
            return data;  
      }
)


// создаем редьюсер
const colorSlice = createSlice({           // возвращает объект, у него есть свойство reducer и actions   
      name: 'color',                       // задаем названеи state
      initialState:  {                          // инициализируем state
            status: '',                         // статус запроса на сервер
            colorList: [],                      // нач значени, ответ от  сервера  [ { id: , title: , code: }, {} ]  запишем в пеерменную colorList
            error: null,
      },
      extraReducers: (builder) => {
            builder
                  .addCase(fetchColors.pending, (state) => {               // отправка запроса на сервер
                        state.status = 'loading';
                  })  
                  .addCase(fetchColors.fulfilled, (state, action) => {    // вытаскиваем action - async() из fetchColor
                        state.status = 'success';
                        state.colorList = action.payload;       // ответ от сервера [{id: 1, title: black, code: #000000}, {}]
                  })  
                  .addCase(fetchColors.rejected, (state, action) => {
                        state.status = 'failed',
                        state.error = action.error.message;
                  })
      }                  
});



export default colorSlice.reducer;