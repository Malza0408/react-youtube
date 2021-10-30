import React, { useEffect, useState } from 'react';
import styles from './home.module.css';
// import axios from 'axios';
import Video from '../video/video';

const Home = ({ videos }) => {
  // const [params] = useState({
  //   part: 'snippet, statistics',
  //   maxResults: 1,
  //   key: 'AIzaSyB6Ihib72gMqqO5Qz9L5DioTEc3Frnb3Lc',
  //   fields:
  //     'items(snippet(title, thumbnails, channelTitle, publishedAt, channelId),statistics(viewCount))',
  //   chart: 'mostPopular',
  // });
  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   const getMostPopularVideo = async () => {
  //     await axios
  //       .get('/videos', { params })
  //       .then(response => {
  //         const result = JSON.parse(JSON.stringify(response));
  //         setVideos(result.data.items);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   };
  //   getMostPopularVideo();
  // }, []);

  const generateKey = publishedAt => {
    return `${publishedAt}_${new Date().getTime()}`;
  };
  const getChannelID = () => {
    // console.log(ID);
  };

  return (
    <>
      <section className={styles.videoList}>
        <ul>
          {videos.map(video => (
            <Video
              key={generateKey(video.snippet.publishedAt)}
              snippet={video.snippet}
              statistics={video.statistics}
              sendChannelID={getChannelID}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
