import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@fortawesome/fontawesome-free/js/all.js';
import Navbar from '../navbar';

const search = jest.fn();
const goHome = jest.fn();

function setup() {
  return render(<Navbar />);
}

describe('navbar', () => {
  it('navbar rendering', () => {
    setup();
  });

  it('사용자가 입력창을 클릭하면 focus 된다.', () => {
    setup();

    userEvent.click(screen.getByPlaceholderText('검색'));
    expect(document.activeElement).toBe(screen.getByPlaceholderText('검색'));
  });

  it('사용자가 버튼을 클릭해서 폼을 제출한다.', () => {
    render(<Navbar search={search} />);
    userEvent.type(screen.getByPlaceholderText('검색'), 'react');
    userEvent.click(screen.getByRole('button'));
    expect(search).toHaveBeenCalled();
  });

  it('사용자가 엔터키로 폼을 제출한다.', () => {
    render(<Navbar search={search} />);
    userEvent.type(screen.getByPlaceholderText('검색'), 'react{enter}');
    expect(search).toHaveBeenCalled();
  });

  it('사용자가 로고를 누르면 메인페이지로 이동한다.', () => {
    render(<Navbar goHome={goHome} />);
    userEvent.click(screen.getByTestId('logo'));
    expect(goHome).toHaveBeenCalled();
  });
});
