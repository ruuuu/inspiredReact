import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Goods } from '../Goods/Goods.jsx';
import { Banner } from '../Banner/Banner.jsx';
import { fetchGender, fetchCategory  } from '../../features/goodsSlice.js';
import { setActiveGender } from '../../features/navigationSlice.js';




//  компонент, возвращает верстку 
//                { gender = 'women' }                      // по умолчнию  gender = 'women'
export const MainPage = () => {                     
      
      const { category, gender } = useParams();   // хук useParams, вернет объект, его детсрутуририруем { category, gender }, category - так названо поле на сервере

      const dispatch = useDispatch();

      const { categories, activeGender, genderList } =  useSelector(state => state.navigation);        // state.navigation  вернет объект  { activeGender, status, error, genderList, categories }, детсрутррируем и получпем только нужные своства  categories, activeGender

      const genderData = categories[activeGender];                                        //   { title,  banner, list: [{title: пижамы, slug: pijams}, {}] }
    
      const categoryData = genderData?.list.find(categoryItem => categoryItem.slug === category);           // { title: пижамы, slug: pijams }
    

      useEffect(() => {
            if(gender){
                  dispatch(setActiveGender(gender));
            }
            else if(genderList[0]){
                  dispatch(setActiveGender(genderList[0]));
                  dispatch(fetchGender(genderList[0]));              // отправится запрос на сервер
            }
           
      }, [gender, genderList, dispatch]);                         // при кликании(смене) gender, genderList  вызовется переданная функция



      useEffect(() => {
            if(gender && category){                   // category так  названо поле на сервере
                  dispatch(fetchCategory({ gender, category }));              // отправится запрос на сервер
                  return;                                                     // далее код не выполнится
            }
            if(gender){
                  dispatch(fetchGender(gender));                  // отправится запрос на сервер
                  return;
            }
           
      }, [gender, category, dispatch]);                        // когда при кликании будет менться  gender, category , вызовется переданная функция



      return (
            <>   {/* React Fragment */}
                  <div>
                        <Banner data={genderData?.banner} category={categoryData?.slug} />                             {/* если у genderData есть свойство banner */}
                  </div>
                  <Goods categoryData={categoryData}  />               {/* Goods принмиает параметр categoryData, поэтому добавчлпм props categoryData ={title: пижамы, slug: pijams} */} 
            </> 
      );
};    


