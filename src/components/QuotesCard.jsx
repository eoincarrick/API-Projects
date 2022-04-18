import React from 'react';
import '../styles/QuotesCard.css';

const QuotesCard = ({ quotes }) => {
  const { content, originator, tags, url, id } = quotes;
  console.log(quotes);
  const data = {
    author: 'The AM',
    quote:
      '"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."',
    link: 'https://www.lipsum.com/',
  };

  return (
    <div className='quotesCard'>
      <p className='quoteContent'>{data.quote}</p>
      <span className='quoteAuthor'>--{data.author}</span>
      <p className='quotesSource'>
        View direct{' '}
        <a
          className='quoteLink'
          href={data.link}
          target='_blank'
          rel='noreferrer'
        >
          source
        </a>
      </p>
    </div>
  );
};

export default QuotesCard;
