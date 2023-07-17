import { NavLink } from 'react-router-dom';
import style from '../Banner/Banner.module.scss';
import { Container } from '../Layout/Container/Container.jsx';
import { API_URL } from '../../const.js';
import { useEffect, useState } from 'react';



export const Banner = ({ data, category }) => {
           //  data = { description:  , id: , bg:{} }

           const [ bgURL, setBgURL ] = useState('');  // useState создает стейт


           useEffect(() => {

                  const foo = () => {
                        const width = document.documentElement.clientWidth;         // ширина браузерногоь окна
                        if(width < 540) {
                              setBgURL(`${API_URL}/${data?.bg.mobile}`);
                        }
                        else if(width < 768){
                              setBgURL(`${API_URL}/${data?.bg.tablet}`);
                        }
                        else if(width < 1024){
                              setBgURL(`${API_URL}/${data?.bg.laptop}`);
                        }
                        else{
                              setBgURL(`${API_URL}/${data?.bg.desktop}`);
                        }
                  }

                  window.addEventListener('resize', foo);  // при изменении размеров экрана вызовется foo()
                  foo();

                  return () => {
                        window.removeEventListener('resize', foo);  
                  }
           }, [data, ]);




            return (
                  data && !category &&         // если data есть и category, то рисуем верстку баннера:
                  <section className={style.banner} style={{  "backgroundImage": `url(${bgURL})` }} >
                        <Container>
                              <div className={style.content}>
                                          <h2 className={style.title}> {data.description} </h2>
                                          <NavLink className={style.link}  to={`/product/${data.id}`} > Перейти </NavLink>
                              </div>
                        </Container>
                  </section>                      
            )

};



 
 

 





// (    //  data = { description:  , id: , bg:{} }


      
//       data &&            // если data есть , то рисуем верстку:
//             <section className={style.banner} style={{ "backgroundImage": `url(${API_URL}/${data.bg.desktop})` }} >
//                   <Container>
//                        <div className={style.content}>
//                               <h2 className={style.title}> {data.description} </h2>
//                               <NavLink className={style.link}  to={`/product/${data.id}`} > Перейти </NavLink>
//                        </div>
//                   </Container>
//             </section>                      
// ); 

     

      
