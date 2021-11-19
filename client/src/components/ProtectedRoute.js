import React from "react";
import { Route, Redirect } from "react-router";
import Cookies from 'js-cookie';

export const ProtectedRoute = ({ component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={ props => Cookies.get('user') ? <Component {...props} /> : <Redirect to='/login' /> }
    />
  );
};


// export const ProtectedRoute = ({component:Component, ...rest} /* destructuramos las props */)=> { 
//   return (
//     <Route {...rest} >
//       {Cookies.get('user') ? <Component/> : <Redirect to='/login' />}
//     </Route>
//   )
// }; 