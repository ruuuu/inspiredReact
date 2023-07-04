import style from './MainPage.module.scss';  
import { Container } from '../Layout/Container/Container.jsx';
import { useParams } from 'react-router-dom';


//  компонент, возвращает верстку
export const MainPage = ({ gender = 'women' }) => {                     // по умолчнию  gender = 'women'
      
      const { category } = useParams();   // хук useParams

      return (
            <Container>
                  <div>MainPage {gender}</div>
                  { category && <p>Категория: { category }</p> }  
            </Container>
      )

};    