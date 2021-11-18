import React from 'react';
import VideoCard from '../video/videoCard';
import styles from './searchResult.module.css';

const SearchResult = ({
  searchResult,
  generateKey,
  handleCount,
  selectVideo,
  handleDate,
  videoCardSetting,
  thumbSize,
  fontSize,
}) => {
  console.log(searchResult);
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
                  handleCount={handleCount}
                  fontSize={fontSize}
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
