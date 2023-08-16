import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants/authorization-status.ts';
import { AppRoute } from '../../constants/app-route.ts';


type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: React.JSX.Element;
}

function PrivateRoute({ authorizationStatus, children }: PrivateRouteProps): React.JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
