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

const videoCardSetting = Object.freeze({
  home: 'home',
  searchResult: 'searchResult',
  playVideo: 'playVideo',
});

const thumbSize = Object.freeze({
  small: 'small',
  medium: 'medium',
});

const setFontSize = Object.freeze({
  regular: 'regular',
  small: 'small',
});

function App() {
  const [videos, setVideos] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const maxResults = 15;
  const history = useHistory();

  useEffect(() => {
    async function fetchVideos() {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=id,snippet,statistics&chart=mostPopular&maxResults=${maxResults}&fields=items(snippet(title, thumbnails, channelTitle, publishedAt, description),statistics(viewCount, likeCount, dislikeCount), id)&key=AIzaSyB6Ihib72gMqqO5Qz9L5DioTEc3Frnb3Lc`,
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
            `https://youtube.googleapis.com/youtube/v3/videos?part=id,snippet,statistics&fields=items(snippet(title, thumbnails, channelTitle, publishedAt, description),statistics(viewCount, likeCount, dislikeCount),id)&id=${videoList}&key=AIzaSyB6Ihib72gMqqO5Qz9L5DioTEc3Frnb3Lc`,
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

  const handleCount = viewCount => {
    if (viewCount < 1000) {
      return `${viewCount}`;
    } else if (viewCount < 10000) {
      viewCount /= 1000;
      viewCount = Math.floor(viewCount);
      return `${viewCount}천`;
    }
    viewCount /= 10000;
    viewCount = Math.floor(viewCount);

    if (viewCount > 10000) {
      viewCount /= 10000;
      viewCount = Math.floor(viewCount);
      return `${viewCount}억`;
    }
    return `${viewCount}만`;
  };

  const handleDate = date => {
    const publishedDate = new Date(date);
    return `${publishedDate.getFullYear()}년 ${publishedDate.getMonth()}월 ${publishedDate.getDate()}일`;
  };

  const handleViewCountForm = count => {
    const number = Number(count);
    return number.toLocaleString('ko-kr');
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
              handleCount={handleCount}
              selectVideo={selectVideo}
              handleDate={handleDate}
              videoCardSetting={videoCardSetting.home}
              thumbSize={thumbSize.medium}
              fontSize={setFontSize.regular}
            />
          )}
        />
        <Route
          path="/searchResult"
          render={() => (
            <SearchResult
              searchResult={searchList}
              generateKey={generateKey}
              handleCount={handleCount}
              selectVideo={selectVideo}
              handleDate={handleDate}
              videoCardSetting={videoCardSetting.searchResult}
              thumbSize={thumbSize.medium}
              fontSize={setFontSize.small}
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
              handleCount={handleCount}
              handleViewCountForm={handleViewCountForm}
              handleDate={handleDate}
              videoCardSetting={videoCardSetting.playVideo}
              thumbSize={thumbSize.small}
              fontSize={setFontSize.small}
            />
          )}
        />
        <Route component={NotFound}></Route>
      </Switch>
    </>
  );
}

export default App;
