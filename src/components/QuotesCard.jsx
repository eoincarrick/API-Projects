import React, { useEffect } from 'react';
import { useDataContext } from '../context/ApiDataContext';
import '../styles/QuotesCard.css';

const QuotesCard = () => {
  const { quotes, getQuotes } = useDataContext();
  console.log(quotes);

  useEffect(() => {
    getQuotes();
  }, []);

  const data = {
    author: 'The AM',
    quote:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    link: 'https://www.lipsum.com/',
  };

  return (
    <div className='quotesCardContainer'>
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
    </div>
  );
};

export default QuotesCard;
