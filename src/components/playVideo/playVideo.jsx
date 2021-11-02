import React from 'react';
import styles from './playVideo.module.css';

const PlayVideo = ({ videoID }) => {
  return (
    <section className={styles.datail}>
      <iframe
        title="playVideo"
        id="ytplayer"
        type="text/html"
        width="720"
        height="405"
        src={`https://www.youtube.com/embed/${videoID}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default PlayVideo;
