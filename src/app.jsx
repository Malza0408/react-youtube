import './app.css';
import { useHistory, Route, Switch } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
import { map } from 'lodash';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import SearchResult from './components/searchResult/searchResult';
import PlayVideo from './components/playVideo/playVideo';
import NotFound from './components/notFound';

function App() {
  const [videos, setVideos] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const maxResults = 12;
  const history = useHistory();

  useEffect(() => {
    async function fetchVideos() {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=id,snippet,statistics&chart=mostPopular&maxResults=${maxResults}&fields=items(snippet(title, thumbnails, channelTitle, publishedAt, description),statistics(viewCount), id)&key=AIzaSyB6Ihib72gMqqO5Qz9L5DioTEc3Frnb3Lc`,
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
            `https://youtube.googleapis.com/youtube/v3/videos?part=id,snippet,statistics&fields=items(snippet(title, thumbnails, channelTitle, publishedAt, description),statistics(viewCount),id)&id=${videoList}&key=AIzaSyB6Ihib72gMqqO5Qz9L5DioTEc3Frnb3Lc`,
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

  const selectVideo = video => {
    setSelectedVideo(video);
    history.push('/playVideo');
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

  const handleDate = date => {
    const publishedDate = new Date(date);
    return `${publishedDate.getFullYear()}년 ${publishedDate.getMonth()}월 ${publishedDate.getDate()}일`;
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
              selectVideo={selectVideo}
              handleDate={handleDate}
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
              selectVideo={selectVideo}
              handleDate={handleDate}
            />
          )}
        />
        <Route
          path="/playVideo"
          render={() => (
            <PlayVideo
              videos={videos}
              video={selectedVideo}
              generateKey={generateKey}
              selectVideo={selectVideo}
              handleViewCount={handleViewCount}
              handleDate={handleDate}
            />
          )}
        />
        <Route component={NotFound}></Route>
      </Switch>
    </>
  );
}

export default App;
