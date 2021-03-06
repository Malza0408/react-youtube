import React, { memo } from 'react';
import VideoCard from '../video/videoCard';
import styles from './searchResult.module.css';
import { generateKey } from '../function/functionBundle';
import useSetting from '../../hooks/useSetting';

const SearchResult = memo(({ searchResult, selectVideo }) => {
  const setting = useSetting();
  return (
    <>
      <section className={styles.searchResult}>
        <div className={styles.container}>
          <ul className={styles.videoList}>
            {searchResult.map(video => (
              <li
                className={styles.videoCard}
                key={generateKey(video.snippet.publishedAt)}
                onClick={() => selectVideo(video)}
              >
                <VideoCard
                  snippet={video.snippet}
                  statistics={video.statistics}
                  fontSize={setting.fontSize.small}
                  display={setting.display.margin}
                  description={setting.description.show}
                  videoCardSetting={setting.page.searchResult}
                  thumbSize={setting.thumbSize.medium}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
});

export default SearchResult;
