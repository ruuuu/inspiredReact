import { Category } from "./Category/Category.jsx";
import { Gender } from "./Gender/Gender.jsx";
import { Container } from "../../Layout/Container/Container.jsx";

// компонент
export const Navigation = () => (                           // возвращает верстку
      
      <nav>
           <Container>
                  <div className="container">
                        <Gender />  
                        <Category />
                  </div>
            </Container>
      </nav>
);

// <Gender /> и <Category /> тоже компоненты