
import {useEffect, useRef} from 'react';

type PreviewVideoPlayerProps = {
    filmSrc: string;
    posterImage: string;
    play: boolean;
}


function PreviewVideoPlayer ({filmSrc, posterImage, play}: PreviewVideoPlayerProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {

    if (videoRef.current === null) {
      return;
    }

    if (play) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [filmSrc]);

  return (

    <video src={filmSrc} poster={posterImage} ref={videoRef} width="280"
      height="175" muted
    >
    </video>

  );
}

export default PreviewVideoPlayer;
