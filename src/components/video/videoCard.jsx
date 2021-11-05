import React from 'react';
import MetaData from './metaData.jsx';
import styles from './videoCard.module.css';

const VideoCard = ({
  snippet,
  statistics,
  handleCount,
  fontSize,
  display,
  description,
  handleDate,
  videoCardSetting,
  thumbSize,
}) => {
  let cardPos;
  switch (videoCardSetting) {
    case 'home':
      cardPos = styles.home;
      break;
    case 'searchResult':
      cardPos = styles.searchResult;
      break;
    case 'playVideo':
      cardPos = styles.playVideo;
      break;
    default:
      throw new Error('check videoCardSetting!');
  }

  const size =
    thumbSize && thumbSize === 'small'
      ? styles.thumbSizeSmall
      : styles.thumbSizeMedium;
  return (
    <>
      <article className={`${cardPos}`}>
        <img
          className={`${size}`}
          src={snippet.thumbnails.medium.url}
          alt="video_thumbnail"
        />
        <div className={styles.metaData}>
          <MetaData
            snippet={snippet}
            statistics={statistics}
            handleCount={handleCount}
            fontSize={fontSize}
            display={display}
            description={description}
            handleDate={handleDate}
          />
        </div>
      </article>
    </>
  );
};

export default VideoCard;
