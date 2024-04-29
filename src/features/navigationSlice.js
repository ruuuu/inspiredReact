import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CATEGORY_URL } from '../const.js';



export const fetchNavigation = createAsyncThunk(            // для запроса на сервер, createAsyncThunk - reducthink, встроен в RTK
      "navigation/fetchNavigation",  //имя задали(navigation - имя action), имя здолжно быть таким же что и  navigationSlice.name, fetchNavigation-имя редьюсера(придумали сами)
      async () => {                                   // асинхрон фукнция
            const response = await fetch(CATEGORY_URL);
            const data = await response.json();  // асинхронный метод response.json();
            return data;  // либо протсо пишем return await
      }
);



// создаем редьюсер
const navigationSlice = createSlice({           // возвращает объект, у него есть свойство reducer и actions   
      name: 'navigation',                       // придумываем  названеи state
      initialState:  {                          // инициализируем state, в любом компоненте можно обратиться к state через useSelector
            activeGender: 'women',              // знач по умолч, в любом компоненте можно обратиться к свойству activeGender(men/women)
            status: '',                         // статус запроса/ответа на сервер
            categories: {},                      // нач значени(получим от сервера  { "men": { title, banner, list: [{title, slug}] },  "women": { title, banner, list: [] },  "kids": { title, banner, list: [] } } и в categories запишем,)
            genderList: [],                      // нач значени(получим от сервера и в genderList запишем)
            error: null,
      },
      reducers: {
            setActiveGender: (state, action) => {           // setActiveGender - это action
                 // console.log('action.payload in setActiveGender', action.payload)
                  state.activeGender = action.payload;            // в action будут параметры(gender) котрые передадим при dispatch(setActiveGender(gender))
            }
      },
      extraReducers: (builder) => {
            builder
                  .addCase(fetchNavigation.pending, (state) => {               // отправка запроса на сервер, fetchNavigation.pending - action
                        state.status = 'loading';
                  })  
                  .addCase(fetchNavigation.fulfilled, (state, action) => {    // вытаскиваем action - async() из fetchNavigation, fetchNavigation.fulfilled - action
                        state.status = 'success';                             // ответо сервера успешно получен
                        state.categories = action.payload;                    // в action.payload приходит ответ от сервера запиештимся в categories: {men: {title, list: [{title, slug},{}]},  women: {title, list: [{},{}]},  kids: {title, list: [{},{}]}}
                        state.genderList = Object.keys(action.payload);       // извлекает из объекта клбчи и записывает их в массив['men', 'women', 'kids']
                  })  
                  .addCase(fetchNavigation.rejected, (state, action) => {     // fetchNavigation.rejected - action
                        state.status = 'failed',                              // от сервера не получили ответ
                        state.error = action.error.message;
                  })
      }                  
});




export const { setActiveGender } = navigationSlice.actions;
// console.log('navigationSlice.actions ', navigationSlice.actions)  // {setActiveGender}

export default navigationSlice.reducer;