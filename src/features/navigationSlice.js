import { createSlice } from '@reduxjs/toolkit';




const navigationSlice = createSlice({        // возвращает объект, у него есть свойство reducer и actions   
      name: 'navigation',                       // задаем названеи редьсюеру
      initialState:  {                          // инициализируем state
            activeGender: 'women'             //  в любом компоненте можно обратиться к этому свойству
      },
      reducers: {
            setActiveGender: (state, action) => {           // setActiveGender - функция(action)
                  state.activeGender = action.payload;
            } 
      }                       
});




export const { setActiveGender } = navigationSlice.actions;

export default navigationSlice.reducer;