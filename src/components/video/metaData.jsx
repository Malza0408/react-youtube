import React from 'react';
import styles from './metaData.module.css';

const MetaData = ({ snippet, statistics, handleViewCount }) => {
  return (
    <>
      <div className={styles.metaData}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channelTitle}>{snippet.channelTitle}</p>
        <p className={styles.viewCount}>
          조회수 {handleViewCount(statistics.viewCount)}
        </p>
        <p className={styles.publishedDate}>{snippet.publishedAt}</p>
      </div>
    </>
  );
};

export default MetaData;
