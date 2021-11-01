import './app.css';
import Home from './components/home/home';
import SearchResult from './components/searchResult/searchResult';
import { useHistory, Route, Switch } from 'react-router-dom';
import NotFound from './components/notFound';
import Navbar from './components/navbar/navbar';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
import { map } from 'lodash';

function App() {
  const [videos, setVideos] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const maxResults = 6;
  const history = useHistory();

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
              setSearchList(result.items);
              history.push('/searchResult');
            })
            .catch(error => console.log('error', error));
        })();
      })
      .catch(error => console.log('error', error));
  };

  const generateKey = publishedAt => {
    return `${publishedAt}_${new Date().getTime() + Math.random()}`;
  };

  const handleViewCount = viewCount => {
    if (viewCount < 10000) {
      viewCount /= 1000;
      viewCount = Math.floor(viewCount);
      return `${viewCount}천회`;
    }
    viewCount /= 10000;
    viewCount = Math.floor(viewCount);

    if (viewCount > 10000) {
      viewCount /= 10000;
      viewCount = Math.floor(viewCount);
      return `${viewCount}억회`;
    }
    return `${viewCount}만회`;
  };

  return (
    <>
      <Navbar search={search} />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Home
              videos={videos}
              generateKey={generateKey}
              handleViewCount={handleViewCount}
            />
          )}
        />
        <Route
          path="/searchResult"
          render={() => (
            <SearchResult
              searchResult={searchList}
              generateKey={generateKey}
              handleViewCount={handleViewCount}
            />
          )}
        />
        <Route component={NotFound}></Route>
      </Switch>
    </>
  );
}

export default App;
