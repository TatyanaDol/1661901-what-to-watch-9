import {Navigate} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';

type PrivateRouteProps = RouteProps & {
    authorizationStatus: AuthorizationStatus;
    children: JSX.Element;
  }

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  if(authorizationStatus === AuthorizationStatus.Unknown) {
    return <LoadingScreen />;
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
