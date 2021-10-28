import React from 'react';
import styles from './video.module.css';

const Video = props => {
  const handleViewCount = viewCount => {
    if (viewCount < 10000) {
      viewCount /= 1000;
      viewCount = Math.floor(viewCount);
      return `${viewCount}천회`;
    }
    viewCount /= 10000;
    viewCount = Math.floor(viewCount);
    return `${viewCount}만회`;
  };

  const sendChannelID = () => {
    props.sendChannelID(props.snippet.channelId);
  };
  return (
    <article className={styles.video_card} onClick={sendChannelID}>
      <img
        className={styles.thumbnails}
        src={props.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className={styles.metaData}>
        <p className={styles.title}>{props.snippet.title}</p>
        <p className={styles.channelTitle}>{props.snippet.channelTitle}</p>
        <p className={styles.viewCount}>
          조회수 {handleViewCount(props.statistics.viewCount)}
        </p>
        <p className={styles.publishedDate}>{props.snippet.publishedAt}</p>
      </div>
    </article>
  );
};

export default Video;
