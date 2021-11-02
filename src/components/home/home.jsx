import React from 'react';
import styles from './home.module.css';
// import axios from 'axios';
import MetaData from '../video/metaData';

const Home = ({ videos, generateKey, handleViewCount, selectVideo }) => {
  return (
    <>
      <section className={styles.home}>
        <ul className={styles.videoList}>
          {videos.map(video => (
            <li
              className={styles.videoCard}
              key={generateKey(video.snippet.publishedAt)}
              onClick={() => selectVideo(video.id)}
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
      </section>
    </>
  );
};

export default Home;
