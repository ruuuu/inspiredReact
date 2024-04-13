import { useRouteError } from "react-router-dom"



export const ErrorPage = () => {
      const error = useRouteError();                        // встренный компонен в react-dom
      
      return (
            <div>
                  <h2>Ошибка 404</h2>
                  <p>{error?.message || 'Неизвестная ошибка'}</p>             {/* если есть свойстов message, то выведет ее, иначе 'Неизвестная ошибка'  */}
            </div>
      )
      
};
      
