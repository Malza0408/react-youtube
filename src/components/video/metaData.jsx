import React from 'react';
import styles from './metaData.module.css';

const MetaData = ({
  snippet,
  statistics,
  handleViewCount,
  fontSize,
  display,
  description,
}) => {
  const font = fontSize === `regular` ? styles.regular : styles.small;
  const displayType =
    display === 'margin' ? styles.haveMargin : styles.haveNone;
  const showDescription = description === 'show' ? styles.show : styles.hidden;
  return (
    <>
      <div className={styles.metaData}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={`${styles.channelTitle} ${font} ${displayType}`}>
          {snippet.channelTitle}
        </p>
        <p className={`${styles.viewCount} ${font}`}>
          조회수 {handleViewCount(statistics.viewCount)}
        </p>
        <p className={`${styles.publishedDate} ${font}`}>
          {snippet.publishedAt}
        </p>
        <span className={`${styles.description} ${showDescription}`}>
          {snippet.description}
        </span>
      </div>
    </>
  );
};

export default MetaData;
