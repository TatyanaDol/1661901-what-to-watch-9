import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/index';


function Player (): JSX.Element {

  const {allFilms} = useAppSelector(({DATA}) => DATA);

  const params = useParams();
  // const film = allFilms[Number(params.id)];
  const film = allFilms.find((element) => element.id === Number(params.id));

  return (
    <div className="player">
      <video src={film?.videoLink} className="player__video" poster={film?.posterImage}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '0%'}}>Toggler</div>
          </div>
          <div className="player__time-value">0:00:00</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
