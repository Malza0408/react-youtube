import React from 'react';
import MetaData from '../video/metaData';
import styles from './searchResult.module.css';

const AfterSearch = ({ searchResult, generateKey, handleViewCount }) => {
  return (
    <>
      <section className={styles.searchResult}>
        <div className={styles.container}>
          <ul className={styles.videoList}>
            {searchResult.map(video => (
              <li
                className={styles.videoCard}
                key={generateKey(video.snippet.publishedAt)}
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
                  fontSize={'samll'}
                  display={'margin'}
                  description={'show'}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default AfterSearch;
