import { Goods } from '../Goods/Goods.jsx'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchGender, fetchCategory  } from '../../features/goodsSlice.js';
import { Banner } from '../Banner/Banner.jsx';



import { setActiveGender } from '../../features/navigationSlice.js';


//  компонент, возвращает верстку 
//                { gender = 'women' }                      // по умолчнию  gender = 'women'
export const MainPage = () => {                     
      
      const { category, gender } = useParams();   // хук useParams, вернет объект , его детсрутуририруем { category, gender }, category - так названо поле на сервере

      const dispatch = useDispatch();

     
    
      useEffect(() => {
            dispatch(setActiveGender(gender));
      }, [gender, dispatch]);                         // при смене gender, вызовется переданная функция


      useEffect(() => {
            if(gender && category){                   // category так  названо поле на сервере
                  dispatch(fetchCategory({ gender, category }));              // отправится язапрос на сервер
                  return;                                                     // далее код не выполнится
            }
            if(gender){
                  dispatch(fetchGender(gender));                  // отправится язапрос на сервер
                  return;
            }
           
      }, [gender, category, dispatch]);                        // при смене gender, category , вызовется переданная функция



      return (
            <>
                  <div>
                        <Banner />
                  </div>
                  <Goods category={category} />               {/* Goods принмиает параметр category, поэтому добавчлпм props category */} 
            </> 
      );

};    


