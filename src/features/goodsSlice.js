import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GOODS_URL } from "../const.js";


export const fetchCategory = createAsyncThunk(            // для запроса на сервер
      'goods/fetchCategory',                              //имя здолжно быть таким же что и goodsSlice.name (fetchCategory- имя для  редьюсера)
       async (param) => {                                // товары получаем в зависимости от param = { gender: , category: }
           
            const url = new URL(GOODS_URL);

            for(const key in param){
                  url.searchParams.append(key, param[key]);   // добвляем к урлу search-параметры gender и category  https://localhost:5173/?gender=men&category=socks
            }

            const response = await fetch(url);              // отправляем GET запрос
            const data = await response.json();
            return data;                                    //  { goods: [{}, {}, {}], pages: 5, page: 1, totalCount: 36 }
      }
);



export const fetchGoods = createAsyncThunk(            // для запроса на сервер
      'goods/fetchGoods',                              //имя здолжно быть таким же что и goodsSlice.name (fetchGender  - имя для  редьюсера(придумали сами))
      async (gender) => {
            //console.log('`${GOODS_URL}?gender=${gender}`', `${GOODS_URL}?gender=${gender}`);
            const url = new URL(GOODS_URL);
            url.searchParams.append('gender', gender);   // добавляем в урл search-параметры,  ?gender=women либо men либо kids
            
            const response = await fetch(url);               //  отправляем GET запрос 
            const data = await response.json();             // json()- асинхрнный метод
            //console.log('data in fetchGender ', data)       // [ {id, title, decription, }, {}, {}, {} ]
            return data; 
      }
);






export const goodsSlice = createSlice({           // возвращает объект, у него есть свойство reducer и actions   
      name: 'goods',                            // придумываем названеи state
      initialState:  {                          // инициализируем state
            status: '',                         // статус запроса на сервер
            goodsList: [],                      // нач значени, ответ от  сервера запишем в перменную goodsList
            error: null,
            page: 0,                            // ответ от  сервера запишем в перменную page
            pages: 0,                            // ответ от  сервера запишем в перменную pages
            totalCount: null,
      },
      extraReducers: (builder) => {
            builder
                  .addCase(fetchGoods.pending, (state) => {               // отправка запроса на сервер, если сервер пока в статусе pending(ожидаем ответ)
                        state.status = 'loading';
                  })  
                  .addCase(fetchGoods.fulfilled, (state, action) => {    // вытаскиваем action - async() из fetchNavigation, сервер в статсе success(получен ответ)
                        state.status = 'success';
                        state.goodsList = action.payload;                 // ответ от сервера находится  в  action.payload, получим  массив товаров  [{}, {}, {}, {}]
                  })  
                  .addCase(fetchGoods.rejected, (state, action) => {
                        state.status = 'failed',
                        state.error = action.error.message;
                  })
                  .addCase(fetchCategory.pending, (state) => {             
                        state.status = 'loading';
                  })  
                  .addCase(fetchCategory.fulfilled, (state, action) => {    
                        state.status = 'success';
                        state.goodsList = action.payload.goods;                 //  в  action.payload находится ответ от сервера  { goods: [{}, {}, {}], pages: 5, page: 1, totalCount: 36 };
                        state.page = action.payload.page;
                        state.pages = action.payload.pages;
                        state.totalCount = action.payload.totalCount;
                  })  
                  .addCase(fetchCategory.rejected, (state, action) => {
                        state.status = 'failed',
                        state.error = action.error.message;
                  })
      }                  
});




export default goodsSlice.reducer;  