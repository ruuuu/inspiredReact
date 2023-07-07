import { Category } from './Category/Category.jsx';
import { Gender } from './Gender/Gender.jsx';
import { Container } from "../../Layout/Container/Container.jsx";
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { setActiveGender } from '../../../features/navigationSlice.js';



// компонент
export const Navigation = ({ list }) => {

      const dispatch = useDispatch();                       // useDispatch - хук, вернет функцию
      const location = useLocation();                     
      const gender = location.pathname.split('/')[1] || 'women';
     

      // useEffect-хук котрый вызывается чтобы выполнить действие связанное со сторонними апи. Также хук используется  если надо вызвать переданную функцю в зависсимости от значения какого-то свойства(activeGender)
      useEffect(() => {     
            //console.log('useEffect ' + location.pathname);
            dispatch(setActiveGender(gender));
            
      }, [gender, dispatch]);           // если  location.pathname(men/socks) изменится, то вызвоввется  useEffect()           
      


      return 
            (
                  <nav>
                        <Container>
                              <div className="container">
                                    <Gender list={list} />  
                                    <Category list={list} />
                              </div>
                        </Container>
                  </nav>
            )
};

    


// <Gender /> и <Category /> тоже компоненты