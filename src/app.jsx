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
  const [selectedVideo, setSelectedVideo] = useState(null);
  const maxResults = 24;
  const history = useHistory();
  useEffect(() => {
    youtube
      .mostPopular(maxResults) //
      .then(videos => setVideos(videos));
    // document.querySelector('body').scrollTo(0, 0);
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
            })
            .then(history.push('/searchResult'));
        });
    },
    [history, youtube],
  );

  const selectVideo = video => {
    setTimeout(() => {
      setSelectedVideo(video);
      history.push('/playVideo');
    }, 200);
    console.log('ply');
  };

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
            videos={searchList.length > 0 ? searchList : videos}
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
