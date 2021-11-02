import React from 'react';
import MetaData from '../video/metaData';
import styles from './playVideo.module.css';

const PlayVideo = ({
  videos,
  video,
  generateKey,
  handleViewCount,
  selectVideo,
}) => {
  return (
    <section className={styles.playVideo}>
      <div className={styles.container}>
        <iframe
          title="playVideo"
          id="ytplayer"
          type="text/html"
          src={`https://www.youtube.com/embed/${video.id}`}
          allowFullScreen
        ></iframe>
        <section className="title_container">
          <h2>{video.snippet.title}</h2>
          <span
            className={styles.viewCount}
          >{`조회수 ${video.statistics.viewCount}회`}</span>
          <span>{video.snippet.publishedAt}</span>
        </section>
        <div className={styles.line}></div>
        <span>{video.snippet.description}</span>
      </div>
      <div className={styles.videoList}>
        <ul>
          {videos.map(video => (
            <li
              className={styles.videoCard}
              key={generateKey(video.snippet.publishedAt)}
              onClick={() => selectVideo(video)}
            >
              <img
                className={styles.thumbnails}
                src={video.snippet.thumbnails.medium.url}
                alt="video_thumbnail"
              />
              <MetaData
                snippet={video.snippet}
                statistics={video.statistics}
                handleViewCount={handleViewCount}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PlayVideo;
