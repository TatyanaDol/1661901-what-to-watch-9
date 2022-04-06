import { MutableRefObject, useEffect, useRef, useState } from 'react';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/index';
import browserHistory from '../../browser-history';
import { VideoLoadingSpinner } from '../video-loading-spinner/video-loading-spinner';
import { getAllFilms } from '../../store/films-data-loading-process/selectors';

function Player (): JSX.Element {

  const [playing, setPlaying] = useState(true);

  const [videoFullTime, setVideoFullTime] = useState(0);

  const [videoCurrentTime, setVideoCurrentTime] = useState(0);

  const [videoProgress, setVideoProgress] = useState(0);

  const [isVideoLoading, setIsVideoLoading] = useState(false);

  const allFilms = useAppSelector(getAllFilms);

  const params = useParams();
  const film = allFilms.find((element) => element.id === Number(params.id));

  const videoPlayerRef = useRef() as MutableRefObject<HTMLVideoElement>;

  function handleVideoPlayPauseClick(control: string) {
    if (control === 'play') {
      videoPlayerRef.current.play();
      setPlaying(true);
    } else if (control === 'pause') {
      videoPlayerRef.current.pause();
      setPlaying(false);
    }
  }

  if(videoPlayerRef.current) {
    videoPlayerRef.current.ontimeupdate = (evt) => {

      const dur = videoPlayerRef.current ? videoPlayerRef.current.duration : 0;

      setVideoFullTime(dur);
      setVideoCurrentTime(videoPlayerRef.current?.currentTime);
      setVideoProgress(((videoPlayerRef.current?.currentTime) / videoFullTime) * 100);
    };
  }


  if(videoPlayerRef.current) {
    const video = videoPlayerRef.current;

    video.onloadstart = (evt) => {
      setIsVideoLoading(true);
    };

    video.onloadeddata = (evt) => {
      setIsVideoLoading(false);
    };
  }


  useEffect(() => {

    setVideoFullTime(videoPlayerRef.current.duration);
    videoPlayerRef.current.play();
    return () => {
      setVideoFullTime(0);
    };

  }, []);


  function getVideoTimeLeft(fullTime: number, currentTime: number) {

    const timeLeft = fullTime - currentTime;
    const hoursLeft = Math.trunc(timeLeft / 3600);
    const minutesLeft = timeLeft - hoursLeft * 3600;

    if (hoursLeft) {
      return  `-${(`0${hoursLeft}`).slice(-2)}:${(`0${Math.floor(minutesLeft / 60)}`).slice(-2)}:${(`0${  Math.floor(timeLeft % 60)}`).slice(-2)}`;
    }
    return  `-${(`0${Math.floor(minutesLeft / 60)}`).slice(-2)}:${(`0${  Math.floor(timeLeft % 60)}`).slice(-2)}`;
  }

  function exitPlayer() {
    browserHistory.back();
  }

  function toggleFullScreen() {

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoPlayerRef.current.requestFullscreen();
    }
  }

  return (
    <div className="player">
      <video ref={videoPlayerRef} src={film?.videoLink} id="video" className="player__video" poster={film?.posterImage}></video>

      {isVideoLoading ? <VideoLoadingSpinner /> : ''}

      <button type="button" className="player__exit" onClick={exitPlayer}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={videoProgress || 0} max="100"></progress>
            <div className="player__toggler" style={{left: `${videoProgress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value"> {(videoFullTime && videoCurrentTime) ? getVideoTimeLeft(videoFullTime, videoCurrentTime) : '0:00:00'}</div>
        </div>

        <div className="player__controls-row">
          {playing ? (
            <button type="button" className="player__play" onClick={() => handleVideoPlayPauseClick('pause')}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
          ) : (
            <button type="button" className="player__play" onClick={() => handleVideoPlayPauseClick('play')}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
          )}

          <div className="player__name">{film?.name}</div>

          <button type="button" className="player__full-screen" onClick={toggleFullScreen}>
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
