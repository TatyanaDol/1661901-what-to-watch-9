import {userProcess} from './user-process';
import {AuthorizationStatus} from '../../const';
import {requireAuthorization, loadUserAvatarUrl} from './user-process';
import { makeFakeAvatarUrl } from '../../utils/mocks';

const url = makeFakeAvatarUrl();

describe('Reducer: User', () => {
  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authorizationStatus: AuthorizationStatus.Unknown,
        avatarUrl: ''});
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NoAuth, avatarUrl: ''};

    expect(userProcess.reducer(state, requireAuthorization(AuthorizationStatus.Auth)))
      .toEqual({authorizationStatus: AuthorizationStatus.Auth, avatarUrl: ''});
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.Auth, avatarUrl: ''};

    expect(userProcess.reducer(state, requireAuthorization(AuthorizationStatus.NoAuth)))
      .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, avatarUrl: ''});
  });
  it('should update avatarUrl by load avatarUrl', () => {
    const state = {authorizationStatus: AuthorizationStatus.Auth, avatarUrl: ''};

    expect(userProcess.reducer(state, loadUserAvatarUrl(url)))
      .toEqual({authorizationStatus: AuthorizationStatus.Auth, avatarUrl: url});
  });
});
