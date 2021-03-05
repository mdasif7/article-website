import React, { useState, useEffect, memo } from 'react';
import ArticleCard from '.';
import { getArticle } from '../../services/articleApi';
import { mapTime } from '../../Utils/timeMapper';
const ArticleCardMemo = memo(function ArticleCard({ articleId, index }) {
  const [article, setArtice] = useState({});

  useEffect(() => {
    getArticle(articleId).then((data) => data && data.url && setArtice(data));
  }, []);

  return article && article.url ? (
    <div
      data-testid={`article-component-${index}`}
      className='article-component'
    >
      <div>
        {index}.{' '}
        <a href={article.url} target='_blank'>
          {article.title}
        </a>
      </div>
      <div>
        <span>
          <span className='bold-class'>By:</span> {article.by}
        </span>
        <span data-testid='story-time'>
          <div>
            <span className='bold-class'>Posted: </span> {mapTime(article.time)}
          </div>{' '}
          {` `}
        </span>
      </div>
    </div>
  ) : null;
});

export default ArticleCardMemo;
