import { useContext } from 'react';
import videoCardContext from '../contexts/videoCardContext';

const useSetting = () => {
  const { setting } = useContext(videoCardContext);
  return setting;
};

export default useSetting;
