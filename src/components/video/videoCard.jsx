import React from 'react';
import MetaData from './metaData.jsx';
import styles from './videoCard.module.css';

const VideoCard = ({
  snippet,
  statistics,
  handleViewCount,
  fontSize,
  display,
  description,
  handleDate,
  videoCardSetting,
  thumbSize,
}) => {
  let thumbStyle;
  switch (videoCardSetting) {
    case 'home':
      thumbStyle = styles.home;
      break;
    case 'searchResult':
      thumbStyle = styles.searchResult;
      break;
    case 'playVideo':
      thumbStyle = styles.playVideo;
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
      <article className={`${thumbStyle}`}>
        <img
          className={`${size}`}
          src={snippet.thumbnails.medium.url}
          alt="video_thumbnail"
        />
        <div className={styles.metaData}>
          <MetaData
            snippet={snippet}
            statistics={statistics}
            handleViewCount={handleViewCount}
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
