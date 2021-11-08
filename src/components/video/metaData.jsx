import React, { memo } from 'react';
import styles from './metaData.module.css';

const MetaData = memo(
  ({
    snippet,
    statistics,
    handleCount,
    fontSize,
    display,
    description,
    handleDate,
    metaSetting,
  }) => {
    let metaPos;
    switch (metaSetting) {
      case 'home':
        metaPos = styles.home;
        break;
      case 'searchResult':
        metaPos = styles.searchResult;
        break;
      case 'playVideo':
        metaPos = styles.playVideo;
        break;
      default:
        throw new Error('check videoCardSetting!');
    }
    const font = fontSize === `regular` ? styles.regular : styles.small;
    // searchResult 에서 metaData margin 여부
    const displayType =
      display === 'margin' ? styles.haveMargin : styles.haveNone;
    const showDescription =
      description === 'show' ? styles.show : styles.hidden;

    return (
      <>
        <p className={`${metaPos} ${styles.title}`}>{snippet.title}</p>
        <p className={`${styles.channelTitle} ${font} ${displayType}`}>
          {snippet.channelTitle}
        </p>
        <p className={`${styles.viewCount} ${font}`}>
          조회수 {`${handleCount(statistics.viewCount)}회`}
        </p>
        <p className={`${styles.publishedDate} ${font}`}>
          {handleDate(snippet.publishedAt)}
        </p>
        <pre className={`${styles.description} ${showDescription}`}>
          {snippet.description}
        </pre>
      </>
    );
  },
);

export default MetaData;
