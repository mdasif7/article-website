import React from 'react';
import ArticleContainer from '../../Containers/ArticleContainer';
import {
  render,
  cleanup,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import { getAllArticleIds, getArticle } from '../../services/articleApi';
import {idsMock, idsMockFails, articleMokc, articleMokcundefined} from "../../MockData/mockData";

beforeEach(cleanup);

jest.mock('../../services/articleApi', () => ({
  getArticle: jest.fn(),
  getAllArticleIds: jest.fn(),
}));

test('renders the story container with a story', async () => {
  getArticle.mockImplementation(() => Promise.resolve(articleMokc));
  getAllArticleIds.mockImplementation(() => Promise.resolve(idsMock));

  const { getByText, queryByTestId, getByTestId } = render(
    <ArticleContainer />
  );
  await waitFor(() =>
    expect(getByText('Hacker News Top Articles')).toBeTruthy()
  );
  let button = getByTestId('more-button');
  fireEvent.click(button);

  await waitFor(() => expect(getByTestId('article-component-21')));
});
test('renders the story container with a story', async () => {
  getArticle.mockImplementation(() => Promise.resolve(articleMokcundefined));
  getAllArticleIds.mockImplementation(() => Promise.resolve(idsMockFails));

  const { getByText, queryByTestId } = render(<ArticleContainer />);
  await waitFor(() =>
    expect(getByText('Hacker News Top Articles')).toBeTruthy()
  );
});
