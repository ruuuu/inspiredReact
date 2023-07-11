import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GOODS_URL } from "../const.js";




export const fetchGoods = createAsyncThunk(            // для запроса на сервер
      "goods/fetchGoods",  //имя здолжно быть таким же что и goodsSlice.name (fetchGoods - имя для  редьюсера)
      async (gender) => {
            const response = await fetch(`${GOODS_URL}?gender=${gender}`);
            const data = await response.json();
            return data;  
      }
)




export const goodsSlice = createSlice({           // возвращает объект, у него есть свойство reducer и actions   
      name: 'goods',                            // задаем названеи редьсюеру
      initialState:  {                          // инициализируем state
            status: '',                         // статус запроса на сервер
            goodsList: [],                      // нач значени, ответ от  сервера сюда запишем
            error: null,
      },
      extraReducers: (builder) => {
            builder
                  .addCase(fetchGoods.pending, (state) => {               // отправка запроса на сервер
                        state.status = 'loading';
                  })  
                  .addCase(fetchGoods.fulfilled, (state, action) => {    // вытаскиваем action - async() из fetchNavigation
                        state.status = 'success';
                        state.goodsList = action.payload;       // ответ от сервера в action.payload,  массив товаров  [{}, {}]
                  })  
                  .addCase(fetchGoods.rejected, (state, action) => {
                        state.status = 'failed',
                        state.error = action.error.message;
                  })
      }                  
});


// export const { setActiveGender } = goodsSlice.actions;

export default goodsSlice.reducer;