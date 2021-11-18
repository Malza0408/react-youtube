import Youtube from './service/youtube';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './app';
import { mount } from 'enzyme';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

const httpClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});
const youtube = new Youtube(httpClient);

const mockMostPopular = [
  {
    id: 'Bp-GYzxGmAM',
    snippet: {
      channelTitle: 'I am MoBo',
      description: 'and from here on you shall call me Kira',
      publishedAt: '2021-11-16T19:02:31Z',
      thumbnails: {
        default: {
          height: 90,
          url: 'https://i.ytimg.com/vi/Bp-GYzxGmAM/default.jpg',
          width: 120,
        },
        high: {
          height: 360,
          url: 'https://i.ytimg.com/vi/Bp-GYzxGmAM/hqdefault.jpg',
          width: 480,
        },
        medium: {
          height: 180,
          url: 'https://i.ytimg.com/vi/Bp-GYzxGmAM/mqdefault.jpg',
          width: 320,
        },
      },
      title: 'Escaping your fate speedrun (21.13 seconds)',
    },
    statistics: {
      dislikeCount: '1214',
      likeCount: '152914',
      viewCount: '1053979',
    },
  },
];

const setup = () => {
  return mount(
    <BrowserRouter>
      <App youtube={youtube} />
    </BrowserRouter>,
  );
};

describe('App', () => {
  it('should render App main page', () => {
    setup();
  });
});
