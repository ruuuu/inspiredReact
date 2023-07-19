import { createSlice } from "@reduxjs/toolkit";
import { GOODS_URL } from "../const.js";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProduct = createAsyncThunk(            // для запроса на сервер
      "product/fetchProduct",                   // имя задали, имя здолжно быть таким же что и  productSlice.name, fetchProduct-имя редьюсера
      async (id) => {                           // id получаемого товара
            const response = await fetch(`${GOODS_URL}/${id}`); //  /api/goods/{id}
            const data = await response.json();  
            return data;  
      }
);






export const productSlice = createSlice({
      name:  'product',
      initialState: {
            product:  {},           // ответ с серевра запишем сюда {id, title, description, cateogry, price, colors, pic, gender, top }
            status: '',  
            error: null,
      },
      extraReducers: (builder) => {
            builder
                  .addCase(fetchProduct.pending, (state) => {               // отправка запроса на сервер
                        state.status = 'loading';
                  })  
                  .addCase(fetchProduct.fulfilled, (state, action) => {    // вытаскиваем action - async() из fetchNavigation
                        state.status = 'success';                             // ответо сервера успешно получен
                        state.product = action.payload;                    // в action.payload приходит ответ от сервера
                            
                  })  
                  .addCase(fetchProduct.rejected, (state, action) => {
                        state.status = 'failed',                              // от сервера не получили ответ
                        state.error = action.error.message;
                  })
      }  

});


export default productSlice.reducer;