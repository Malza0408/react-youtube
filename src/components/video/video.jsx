import React from 'react';
import styles from './video.module.css';

const Video = props => {
  return (
    <article className={styles.video_card}>
      <img
        className={styles.thumbnails}
        src={props.snippet.thumbnails.medium.url}
        alt=""
      />
    </article>
  );
};

export default Video;
