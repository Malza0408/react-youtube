import { mount } from 'enzyme';
import VideoCardProvider from '../../../providers/videoCardProvider';
import Home from '../home';

const dummyVideo = [
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

const selectVideo = jest.fn();
const generateKey = jest.fn();
generateKey.mockReturnValue(Math.random());

function setup() {
  return mount(
    <>
      <VideoCardProvider>
        <Home videos={dummyVideo} selectVideo={selectVideo} />,
      </VideoCardProvider>
    </>,
  );
}

describe('home', () => {
  it('home rendering', () => {
    setup();
  });

  it('비디오를 하나 선택하면 props중 하나인 selectVideo 가 동작한다.', () => {
    const view = setup();
    const list = view.find('.videoCard');
    list.simulate('click');
    expect(selectVideo).toHaveBeenCalledTimes(1);
  });
});
