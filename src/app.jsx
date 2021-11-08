import './app.css';
import { useHistory, Route, Switch, BrowserRouter } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { useCallback, useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import SearchResult from './components/searchResult/searchResult';
import PlayVideo from './components/playVideo/playVideo';
import NotFound from './components/notFound';
import * as functions from './components/function/functionBundle';

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

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const maxResults = 24;
  const history = useHistory();
  useEffect(() => {
    youtube
      .mostPopular(maxResults) //
      .then(videos => setVideos(videos));
  }, [youtube]);

  // 검색하고 결과를 받는데, 결과의 id 들을 받아온다.
  const search = useCallback(
    query => {
      youtube
        .searchID(maxResults, query) //
        .then(result => {
          youtube
            .searchVideos(result) //
            .then(videos => {
              setSearchList(videos);
              console.log(videos.length);
            })
            .then(history.push('/searchResult'));
        });
    },
    [history, youtube],
  );

  const selectVideo = video => {
    setSelectedVideo(video);
    history.push('/playVideo');
  };

  const goHome = useCallback(() => history.push('/'), [history]);

  return (
    <>
      <Navbar search={search} goHome={goHome} />
      <Switch>
        <Route exact path="/">
          <Home
            videos={videos}
            generateKey={functions.generateKey}
            handleCount={functions.handleCount}
            selectVideo={selectVideo}
            handleDate={functions.handleDate}
            videoCardSetting={videoCardSetting.home}
            thumbSize={thumbSize.medium}
            fontSize={setFontSize.small}
          />
        </Route>
        <Route path="/searchResult">
          <SearchResult
            searchResult={searchList}
            generateKey={functions.generateKey}
            handleCount={functions.handleCount}
            selectVideo={selectVideo}
            handleDate={functions.handleDate}
            videoCardSetting={videoCardSetting.searchResult}
            thumbSize={thumbSize.medium}
            fontSize={setFontSize.small}
          />
        </Route>
        <Route path="/playVideo">
          <PlayVideo
            videos={searchList.length > 0 ? searchList : videos}
            video={selectedVideo}
            generateKey={functions.generateKey}
            selectVideo={selectVideo}
            handleCount={functions.handleCount}
            handleViewCountForm={functions.handleViewCountForm}
            handleDate={functions.handleDate}
            videoCardSetting={videoCardSetting.playVideo}
            thumbSize={thumbSize.small}
            fontSize={setFontSize.small}
          />
        </Route>
        <Route component={NotFound}></Route>
      </Switch>
    </>
  );
}

export default App;
