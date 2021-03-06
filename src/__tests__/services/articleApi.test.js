import axios from 'axios';
import {  getArticle, getAllArticleIds } from '../../services/articleApi';
import {articleMokcundefined, articleMokc, idsMock} from "../../MockData/mockData";


jest.mock('axios');
beforeEach(() => {
    jest.resetAllMocks();
  });
  it('Hackers Article API', async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: articleMokc })
    );

    const entity = await getArticle(1);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(entity).toEqual(articleMokc);
  });
  it('Hackers Article IDs API', async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: idsMock.data })
    );

    const entity = await getAllArticleIds();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(entity).toEqual(idsMock);
  });
  it('Hackers Article IDs API Fails', async () => {
    axios.get.mockImplementation(() =>
      Promise.reject("Error")
    );
    const entity = await getAllArticleIds();
  });