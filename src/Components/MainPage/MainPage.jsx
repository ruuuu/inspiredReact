import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Goods } from '../Goods/Goods.jsx';
import { Banner } from '../Banner/Banner.jsx';
import { fetchGoods, fetchCategory  } from '../../features/goodsSlice.js';
import { setActiveGender } from '../../features/navigationSlice.js';




//  компонент, возвращает верстку 
//                { gender = 'women' }                      // по умолчнию  gender = 'women'
export const MainPage = () => {                     
      
      const { gender, category } = useParams();   // хук useParams нужен чтобы вернуть параметры, котые есть в пути /:gender/:category. Вернет объект, его детсрутуририруем { category, gender }

      const dispatch = useDispatch();

      const { categories, activeGender, genderList } = useSelector(state => state.navigation);        // state.navigation  вернет объект  { activeGender, status, error, genderList, categories }, детсрутррируем и получпем только нужные своства  categories, activeGender

      const genderData = categories[activeGender];                                        //   { title, banner, list: [ {title: пижамы, slug: pijams}, {title: носки, slug: socks} ] }
    
      const categoryData = genderData?.list.find(categoryItem => categoryItem.slug === category);           // { title: пижамы, slug: pijams }
    

      useEffect(() => {
            if(gender){
                  dispatch(setActiveGender(gender));
            }
            else if(genderList[0]){
                  dispatch(setActiveGender(genderList[0]));
                  dispatch(fetchGoods(genderList[0]));              // отправится запрос на сервер
            }
           
      }, [gender, genderList, dispatch]);                         // при смене(кликании) gender, genderList=[women, men, kids]  вызовется переданная функция



      useEffect(() => {
            if(gender && category){                  
                  dispatch(fetchCategory({ gender, category }));              // отправится запрос на сервер
                  return;                                                     // далее код не выполнится
            }
            if(gender){
                  dispatch(fetchGoods(gender));                  // отправится запрос на сервер
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


