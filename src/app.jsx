import './app.css';
import { useHistory, Route, Switch } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import SearchResult from './components/searchResult/searchResult';
import PlayVideo from './components/playVideo/playVideo';
import NotFound from './components/notFound';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [playVideoList, setplayVideoList] = useState([]);
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
    query =>
      youtube
        .searchID(maxResults, query) //
        .then(result => {
          youtube
            .searchVideos(result) //
            .then(videos => {
              setTimeout(() => {
                setSearchList(videos);
                history.push('/searchResult');
              }, 200);
            });
        }),
    [history, youtube],
  );

  const selectVideo = useCallback(
    video => {
      setTimeout(() => {
        setSelectedVideo(video);
        setplayVideoList(searchList);
        history.push('/playVideo');
      }, 200);
    },
    [history, searchList],
  );

  const goHome = useCallback(() => history.push('/'), [history]);

  return (
    <>
      <Navbar search={search} goHome={goHome} />
      <Switch>
        <Route exact path="/">
          <Home videos={videos} selectVideo={selectVideo} />
        </Route>
        <Route path="/searchResult">
          <SearchResult searchResult={searchList} selectVideo={selectVideo} />
        </Route>
        <Route path="/playVideo">
          <PlayVideo
            videos={playVideoList.length > 0 ? playVideoList : videos}
            video={selectedVideo}
            selectVideo={selectVideo}
          />
        </Route>
        <Route component={NotFound}></Route>
      </Switch>
    </>
  );
}

export default App;
