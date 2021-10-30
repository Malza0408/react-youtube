import './app.css';
import Home from './components/home/home';
import Watch from './components/watch';
import { Route, Switch } from 'react-router-dom';
import NotFound from './components/notFound';
import Navbar from './components/navbar/navbar';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
import { map } from 'lodash';

function App() {
  const [videos, setVideos] = useState([]);
  const maxResults = 8;

  useEffect(() => {
    async function fetchVideos() {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=${maxResults}&fields=items(snippet(title, thumbnails, channelTitle, publishedAt),statistics(viewCount))&key=AIzaSyB6Ihib72gMqqO5Qz9L5DioTEc3Frnb3Lc`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          setVideos(result.items);
        })
        .catch(error => console.log('error', error));
    }
    fetchVideos();
  }, []);

  // 검색하고 결과를 받는데, 결과의 id 들을 받아온다.
  const search = async query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=id&maxResults=${maxResults}&q=${query}&fields=items(id(videoId))&key=AIzaSyB6Ihib72gMqqO5Qz9L5DioTEc3Frnb3Lc`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        const videoList = map(result.items, 'id.videoId').join();
        console.log(videoList);
        (async function fetchVideos() {
          const requestOptions = {
            method: 'GET',
            redirect: 'follow',
          };

          await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&fields=items(snippet(title, thumbnails, channelTitle, publishedAt),statistics(viewCount))&id=${videoList}&key=AIzaSyB6Ihib72gMqqO5Qz9L5DioTEc3Frnb3Lc`,
            requestOptions,
          )
            .then(response => response.json())
            .then(result => {
              setVideos(result.items);
              console.log(videos);
            })
            .catch(error => console.log('error', error));
        })();
      })
      .catch(error => console.log('error', error));
  };

  return (
    <>
      <Navbar search={search} />
      <Switch>
        <Route path="/" exact render={() => <Home videos={videos} />} />
        <Route path="/watch" component={Watch} />
        <Route component={NotFound}></Route>
      </Switch>
    </>
  );
}

export default App;
