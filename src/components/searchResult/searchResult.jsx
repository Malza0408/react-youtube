import React from 'react';
import VideoCard from '../video/videoCard';
import styles from './searchResult.module.css';

const SearchResult = ({
  searchResult,
  generateKey,
  handleViewCount,
  selectVideo,
  handleDate,
  videoCardSetting,
  thumbSize,
}) => {
  return (
    <>
      <section className={styles.searchResult}>
        <div className={styles.container}>
          <ul className={styles.videoList}>
            {searchResult.map(video => (
              <li
                className={styles.videoCard}
                key={generateKey(video.snippet.publishedAt)}
                onClick={() => selectVideo(video)}
              >
                <VideoCard
                  snippet={video.snippet}
                  statistics={video.statistics}
                  handleViewCount={handleViewCount}
                  fontSize={'samll'}
                  display={'margin'}
                  description={'show'}
                  handleDate={handleDate}
                  videoCardSetting={videoCardSetting}
                  thumbSize={thumbSize}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SearchResult;
