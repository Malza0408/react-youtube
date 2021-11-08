import React, { memo } from 'react';
import styles from './home.module.css';
import VideoCard from '../video/videoCard';

const Home = memo(
  ({
    videos,
    generateKey,
    handleCount,
    selectVideo,
    handleDate,
    videoCardSetting,
    fontSize,
  }) => {
    return (
      <>
        <section className={styles.home}>
          <ul className={styles.videoList}>
            {videos.map(video => (
              <li
                className={styles.videoCard}
                key={generateKey(video.snippet.publishedAt)}
                onClick={() => selectVideo(video)}
              >
                <VideoCard
                  snippet={video.snippet}
                  statistics={video.statistics}
                  handleCount={handleCount}
                  fontSize={fontSize}
                  handleDate={handleDate}
                  videoCardSetting={videoCardSetting}
                />
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  },
);

export default Home;
