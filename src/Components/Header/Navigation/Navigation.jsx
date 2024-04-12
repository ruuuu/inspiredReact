import { Category } from './Category/Category.jsx';
import { Gender } from './Gender/Gender.jsx';
import { Container } from '../../Layout/Container/Container.jsx';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { setActiveGender } from '../../../features/navigationSlice.js';



// компонент            { list }-деструктриузая
export const Navigation = () => (

      <nav>
            <Container>
                  <Gender />  
                  <Category />
            </Container>
      </nav>
);


    


// <Gender /> и <Category /> тоже компоненты