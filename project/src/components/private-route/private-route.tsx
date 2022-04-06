import { useEffect } from 'react';
import {Navigate} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { checkAuthAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

type PrivateRouteProps = RouteProps & {
    children: JSX.Element;
  }

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [children, dispatch]);

  if(authorizationStatus === AuthorizationStatus.Unknown) {
    return <LoadingScreen />;
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
