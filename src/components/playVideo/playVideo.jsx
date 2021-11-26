import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState, memo } from 'react';
import VideoCard from '../video/videoCard';
import styles from './playVideo.module.css';
import * as functions from '../function/functionBundle';
import useSetting from '../../hooks/useSetting';

const PlayVideo = memo(({ videos, video, selectVideo }) => {
  const [toggle, setToggle] = useState('false');
  const toggleDescription = event => {
    setToggle(!toggle);
    event.target.innerText === '더보기'
      ? (event.target.innerText = '간략히')
      : (event.target.innerText = '더보기');
  };

  useEffect(() => {
    setToggle('false');
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const setting = useSetting();
  return (
    video && (
      <section className={styles.playVideo}>
        <div className={styles.container}>
          <iframe
            title="playVideo"
            id="ytplayer"
            type="text/html"
            src={`https://www.youtube.com/embed/${video && video.id}`}
            allowFullScreen
          ></iframe>
          <section className={styles.title_container}>
            <h2>{video.snippet.title}</h2>
            <section className={styles.title_metaData}>
              <section className={styles.viewAndDate}>
                <span
                  className={styles.viewCount}
                >{`조회수 ${functions.handleViewCountForm(
                  video.statistics.viewCount,
                )}회`}</span>
                <span className={styles.publishedAt}>
                  {functions.handleDate(video.snippet.publishedAt)}
                </span>
              </section>
              <section className={styles.icons_container}>
                <div className={styles.icons}>
                  <FontAwesomeIcon
                    icon={['far', 'thumbs-up']}
                    color="white"
                    className={styles.thumb_icon}
                  />
                  <span>
                    {functions.handleCount(video.statistics.likeCount)}
                  </span>
                </div>
                <div className={styles.icons}>
                  <FontAwesomeIcon
                    icon={['far', 'thumbs-down']}
                    color="white"
                    className={styles.thumb_icon}
                  />
                  <span>
                    {functions.handleCount(video.statistics.dislikeCount)}
                  </span>
                </div>
              </section>
            </section>
          </section>
          <section className={styles.description_container}>
            <pre className={toggle ? styles.description : styles.show}>
              {video.snippet.description}
            </pre>
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
                key={functions.generateKey(video.snippet.publishedAt)}
                onClick={() => selectVideo(video)}
              >
                <VideoCard
                  snippet={video.snippet}
                  statistics={video.statistics}
                  fontSize={setting.fontSize.small}
                  videoCardSetting={setting.page.playVideo}
                  thumbSize={setting.thumbSize.small}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  );
});

export default PlayVideo;
