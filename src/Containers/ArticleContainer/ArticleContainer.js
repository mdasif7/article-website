import React, { useEffect, useState } from 'react';
import { getAllArticleIds } from '../../services/articleApi';
import ArticleCard from '../../Components/ArticleCard';
import { NO_OF_RECORDS } from '../../AppConstant/AppConstant';
import './ArticleContainer.scss';

const ArticleContainer = () => {
  const [ids, setIds] = useState([]);
  const [error, setError] = useState(false)
  const [noOfRecords, setnoOfRecords] = useState(NO_OF_RECORDS);
  console.log(noOfRecords, 'dd', ids.length);
  useEffect(() => {
    getAllArticleIds().then((data) => {
      if(data && !data.success) setError(true)
      setIds(data)
    });
  }, []);
  const onMoreClick = () => {
    let temp = noOfRecords + NO_OF_RECORDS;
    setnoOfRecords(temp);
  };
  return (
    <div className='article-container'>
      <div className='hacker-heading'>Hacker News Top Articles</div>
      <div className='articles-wrapper'>
        {ids &&
          ids.success &&
          !ids.loading > 0 &&
          ids.data &&
          ids.data.slice(0, noOfRecords).map((item, i) => {
            return <ArticleCard key={item} index={i + 1} articleId={item} />;
          })}
        {error && <p>Something Went Wrong</p>}
        {ids && ids.loading && <p>Loading.....</p>}
      </div>
      {ids && ids.data && ids.data.length>0 && noOfRecords < ids.data.length && (
        <button className='more-class' onClick={() => onMoreClick()}>
          Show More Articles
        </button>
      )}
    </div>
  );
};

export default ArticleContainer;
