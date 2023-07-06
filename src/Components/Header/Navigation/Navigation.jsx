import { Category } from "./Category/Category.jsx";
import { Gender } from "./Gender/Gender.jsx";
import { Container } from "../../Layout/Container/Container.jsx";




// компонент
export const Navigation = ({ list }) => (
      
      <nav>
            <Container>
                  <div className="container">
                        <Gender list={list} />  
                        <Category list={list} />
                  </div>
            </Container>
      </nav>

);

    


// <Gender /> и <Category /> тоже компоненты