import { useState } from 'react';
import videoCardContext from '../contexts/videoCardContext';

const VideoCardProvider = ({ children }) => {
  const [setting] = useState({
    page: {
      home: 'home',
      searchResult: 'searchResult',
      playVideo: 'playVideo',
    },
    thumbSize: {
      small: 'small',
      medium: 'medium',
    },
    fontSize: {
      regular: 'regular',
      small: 'small',
    },
    display: {
      margin: 'margin',
      none: 'none',
    },
    description: {
      show: 'show',
      none: 'none',
    },
  });

  return (
    <videoCardContext.Provider value={{ setting }}>
      {children}
    </videoCardContext.Provider>
  );
};

export default VideoCardProvider;
