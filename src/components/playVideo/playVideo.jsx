import React from 'react';
import { useState } from 'react/cjs/react.development';
import MetaData from '../video/metaData';
import styles from './playVideo.module.css';

const PlayVideo = ({
  videos,
  video,
  generateKey,
  handleViewCount,
  selectVideo,
  handleDate,
}) => {
  const [toggle, setToggle] = useState('false');

  const toggleDescription = event => {
    setToggle(!toggle);
    event.target.innerText === '더보기'
      ? (event.target.innerText = '간략히')
      : (event.target.innerText = '더보기');
  };

  const handleViewCountForm = count => {
    const number = Number(count);
    return number.toLocaleString('ko-kr');
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
          <span className={styles.viewCount}>{`조회수 ${handleViewCountForm(
            video.statistics.viewCount,
          )}회`}</span>
          <span className={styles.publishedAt}>
            {handleDate(video.snippet.publishedAt)}
          </span>
        </section>
        <section className={styles.description_container}>
          <p className={toggle ? styles.description : styles.show}>
            {video.snippet.description}
          </p>
          <button className={styles.showMore} onClick={toggleDescription}>
            더보기
          </button>
        </section>
      </div>
      <div className={styles.videoList}>
        <ul>
          {videos.map(video => (
            <li
              className={styles.videoCard}
              key={generateKey(video.snippet.publishedAt)}
              onClick={() => selectVideo(video)}
            >
              <img
                className={styles.thumbnails}
                src={video.snippet.thumbnails.medium.url}
                alt="video_thumbnail"
              />
              <div className={styles.metaData}>
                <MetaData
                  snippet={video.snippet}
                  statistics={video.statistics}
                  handleViewCount={handleViewCount}
                  fontSize={'small'}
                  handleDate={handleDate}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PlayVideo;
