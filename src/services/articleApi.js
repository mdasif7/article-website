import axios from 'axios';
export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const topArticlesUrl = `${baseUrl}topstories.json`;
export const articleUrl = `${baseUrl}item/`;

export const getAllArticleIds = async () => {
  const result = await (await axios.get(topArticlesUrl)
  .then(res=>{
    return {
      data:res.data,
      success: true,
      loading:false
  }})
  .catch(err=>{
    return {
      data:[],
      success: false,
      loading:false
    }
  }));
  return result;
};

export const getArticle = async (id) => {
  const result = await axios
    .get(`${articleUrl + id}.json`);

  return result.data;
};
