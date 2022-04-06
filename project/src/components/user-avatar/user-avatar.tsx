import { MouseEvent } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus, getAvatarUrl } from '../../store/user-process/selectors';


export function UserAvatar(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const avatarUrl = useAppSelector(getAvatarUrl);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleUserAvatarClick(evt: MouseEvent<HTMLImageElement>) {
    evt.preventDefault();
    navigate(AppRoute.MyList);
  }

  function handleLogout(evt: MouseEvent<HTMLLIElement>) {
    evt.preventDefault();
    dispatch(logoutAction());
  }

  if(authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img
              src={avatarUrl}
              alt="User avatar"
              width="63"
              height="63"
              onClick={handleUserAvatarClick}
            />
          </div>
        </li>
        <li className="user-block__item" onClick={handleLogout}>
          <Link to={AppRoute.SignIn} className="user-block__link">Sign out</Link>
        </li>
      </ul>
    );
  }
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
      </li>
    </ul>
  );
}
