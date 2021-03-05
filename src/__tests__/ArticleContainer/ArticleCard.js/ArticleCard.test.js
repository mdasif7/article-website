import React from 'react';
import ArticleCard from '../../../Components/ArticleCard';
import {
  render,
  cleanup,
  waitFor,
} from '@testing-library/react';
import {  getArticle } from '../../../services/articleApi';
import {articleMokcundefined} from "../../../MockData/mockData";

beforeEach(cleanup);

jest.mock('../../../services/articleApi', () => ({
  getArticle: jest.fn(),
}));


test('renders the story container with a story', async () => {
  getArticle.mockImplementation(() => Promise.resolve(articleMokcundefined));
  const { getByTestId } = render(<ArticleCard key={1} index={1} articleId={1} />);
  await waitFor(() => expect(getByTestId('article-component-1')));
});
