
import {useEffect, useRef} from 'react';

type PreviewVideoPlayerProps = {
    filmSrc: string;
    posterImage: string;
    play: boolean;
}


function PreviewVideoPlayer ({filmSrc, posterImage, play}: PreviewVideoPlayerProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video === null) {
      return;
    }
    const playPromise = video.play();
    if (playPromise !== undefined && playPromise !== null) {
      playPromise
        .then(() => {
          if (!play) {
            video.load();
          }
        });
    }
  }, [filmSrc, play]);

  return (

    <video src={filmSrc} poster={posterImage} ref={videoRef} width="280"
      height="175" muted preload='none'
    >
    </video>

  );
}

export default PreviewVideoPlayer;
