import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import VideoCard from '../video/videoCard';
import styles from './playVideo.module.css';

const PlayVideo = ({
  videos,
  video,
  generateKey,
  handleCount,
  handleViewCountForm,
  selectVideo,
  handleDate,
  videoCardSetting,
  thumbSize,
  fontSize,
}) => {
  const [toggle, setToggle] = useState('false');

  const toggleDescription = event => {
    setToggle(!toggle);
    event.target.innerText === '더보기'
      ? (event.target.innerText = '간략히')
      : (event.target.innerText = '더보기');
  };

  return (
    <section className={styles.playVideo}>
      <div className={styles.container}>
        <iframe
          title="playVideo"
          id="ytplayer"
          type="text/html"
          src={`https://www.youtube.com/embed/${video.id}`}
          allowFullScreen
        ></iframe>
        <section className={styles.title_container}>
          <h2>{video.snippet.title}</h2>
          <section className={styles.title_metaData}>
            <section className={styles.viewAndDate}>
              <span className={styles.viewCount}>{`조회수 ${handleViewCountForm(
                video.statistics.viewCount,
              )}회`}</span>
              <span className={styles.publishedAt}>
                {handleDate(video.snippet.publishedAt)}
              </span>
            </section>
            <section className={styles.icons}>
              <FontAwesomeIcon
                icon={['far', 'thumbs-up']}
                color="white"
                className={styles.thumb_icon}
              />
              <span>{handleCount(video.statistics.likeCount)}</span>
              <FontAwesomeIcon
                icon={['far', 'thumbs-down']}
                color="white"
                className={styles.thumb_icon}
              />
              <span>{handleCount(video.statistics.dislikeCount)}</span>
            </section>
          </section>
        </section>
        <section className={styles.description_container}>
          <p className={toggle ? styles.description : styles.show}>
            {video.snippet.description}
          </p>
          <button className={styles.showMore} onClick={toggleDescription}>
            더보기
          </button>
        </section>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.videoList}>
        <ul>
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
                thumbSize={thumbSize}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PlayVideo;
