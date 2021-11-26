import React, { memo } from 'react';
import styles from './home.module.css';
import VideoCard from '../video/videoCard';
import { generateKey } from '../function/functionBundle';
import useSetting from '../../hooks/useSetting';

const Home = memo(({ videos, selectVideo }) => {
  const setting = useSetting();
  return (
    <>
      <section className={styles.home}>
        <ul className={styles.videoList}>
          {videos.map(video => (
            <li
              className={styles.videoCard}
              key={generateKey(video.snippet.publishedAt)}
              onClick={() => selectVideo(video)}
            >
              <VideoCard
                snippet={video.snippet}
                statistics={video.statistics}
                fontSize={setting.fontSize.small}
                display={setting.display.none}
                description={setting.description.none}
                videoCardSetting={setting.page.home}
                thumbSize={setting.thumbSize.medium}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
});

export default Home;
