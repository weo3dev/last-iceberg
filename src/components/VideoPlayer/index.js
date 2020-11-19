import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import useTranslations from '../useTranslations';
import playButton from '../../images/play-video.png';

const VideoPlayer = (props) => {

  const [isOpen, setOpen] = useState(false);

  // videoClass
  // videoID - (link id)
  const videoID = props.videoID;
  const videoClass = props.videoClass;
  const videoTitle = props.videoTitle;

  const {
    videoDrum,
    videoSing,
    videoDance,
    videoJustice,
  } = useTranslations();


  return (
    <>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoID} onClose={() => setOpen(false)} />
      <article className={`video-player ${videoClass}`}>
        { //!videoTitle &&
          // <svg height="0" width="0">
          //   <clipPath id="svgPathB">
          //     <path class="cls-1" d="M0,0V0,0s800,400,1600,0V200H0"></path>
          //   </clipPath>
          // </svg>
        }
        <section className={`video-launcher ${videoClass}`} data-aos="fade-up">
          { videoTitle && <p className="video-title">{videoTitle}</p> }
          { !videoTitle && <p>{videoDrum} • {videoSing} • {videoDance}</p> }
          { !videoTitle && <p>{videoJustice}</p> }
          <img className="video-button" alt="play video" src={playButton} onClick={() => setOpen(true)} />
        </section>
      </article>
    </>
  )
}

export default VideoPlayer;