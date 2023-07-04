import { Category } from "./Category/Category.jsx";
import { Gender } from "./Gender/Gender.jsx";


// компонент
export const Navigation = () => (
      <nav>
            <div className="container">
                  <Gender />  
                  <Category />
            </div>
      </nav>
)

// <Gender /> и <Category /> тоже компоненты