import { mount } from 'enzyme';
import VideoCardProvider from '../../../providers/videoCardProvider';
import SearchResult from '../searchResult';

const dummySearch = [
  {
    id: 'kppN2AhAbSE',
    snippet: {
      channelTitle: '나나양',
      description: '무지개도 있어요~!',
      publishedAt: '2021-11-16T10:00:30Z',
      thumbnails: {
        medium: {
          height: 180,
          url: 'https://i.ytimg.com/vi/kppN2AhAbSE/mqdefault.jpg',
          width: 320,
        },
      },
      title: '[11월 둘째주 하이라이트] 어떻게 사람이름이',
    },
    statistics: {
      dislikeCount: '11',
      likeCount: '1030',
      viewCount: '40687',
    },
  },
];

const generateKey = jest.fn();
generateKey.mockReturnValue(Math.random());
const selectVideo = jest.fn();

const setup = () => {
  return mount(
    <VideoCardProvider>
      <SearchResult searchResult={dummySearch} selectVideo={selectVideo} />,
    </VideoCardProvider>,
  );
};

describe('searchResult', () => {
  it('searchResult rendering', () => {
    setup();
  });

  it('비디오를 하나 선택하면 props중 하나인 selectVideo 가 동작한다.', () => {
    const view = setup();
    const list = view.find('.videoCard');
    list.simulate('click');
    expect(selectVideo).toBeCalledTimes(1);
  });
});
