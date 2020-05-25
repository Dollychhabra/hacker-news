import React, { useState, useEffect } from 'react';
import Header from '../../molecules/Header/Header';
import Anchor from '../../atoms/Anchor/Anchor';
import Image from '../../atoms/Image/Image';
import Para from '../../atoms/Para/Para';
import List from '../../molecules/List/List';
import { getHoursFromISOString } from '../../../utils/dateTime';
import axios from 'axios';

const HomePage = (props) => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://hn.algolia.com/api/v1/search');

      console.log('res', result);

      setData(result.data);
    };
    fetchData();
  }, []);

  const anchorArray = [
    {
      name: 'top',
      url: 'http://www.google.com',
    },
    {
      name: 'new',
      url: 'http://www.google.com',
    },
  ];

  return (
    <div
      className="homepage"
      style={{ width: 85 + '%', margin: 0 + ' ' + 'auto' }}
    >
      <div
        className="homepage-header"
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#ff6600',
        }}
      >
        <Anchor
          to="https://news.ycombinator.com"
          style={{ padding: 0.5 + 'rem', paddingRight: 1 + 'rem' }}
        >
          <Image
            src="y18.gif"
            width="18"
            height="18"
            style={{ border: `${1}px` + ` ` + `white` + ` ` + `solid` }}
          />
        </Anchor>
        {anchorArray.map((linkItem) => (
          <Header
            item={linkItem}
            className="header-container"
            style={{
              paddingRight: 0.5 + 'rem',
              borderRight: 1 + 'px' + ' ' + 'solid' + ' ' + 'black',
              marginRight: 0.5 + 'rem',
              color: 'blue',
            }}
          />
        ))}
      </div>
      <List
        style={{
          backgroundColor: '#f6f6ef',
          marginTop: 2.5 + 'rem',
          padding: 0,
        }}
      >
        {data &&
          data.hits &&
          data.hits.map((item) => {
            return (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#e6e6df',
                }}
              >
                <div style={{ paddingRight: 5 + 'rem' }}>
                  {item.num_comments}
                </div>
                <div style={{ padding: 1 + 'rem' }}>{item.points}</div>
                <Para
                  style={{
                    fontFamily: 'Verdana Geneva sans-serif',
                    fontSize: 10 + 'pt',
                  }}
                >
                  <span style={{ fontSize: 1 + 'rem' }}>{item.title}</span>
                  <Anchor
                    to={item.url}
                    style={{ padding: 3 + 'px', color: '#818492' }}
                  >{`(${item.url})`}</Anchor>
                  <span
                    style={{
                      padding: 3 + 'px',
                      color: '#b8b9ba',
                    }}
                  >
                    by
                  </span>
                  <span style={{ padding: 3 + 'px' }}>{item.author}</span>
                  <span style={{ padding: 3 + 'px', color: '#818492' }}>
                    {getHoursFromISOString(item.created_at)}
                    <span style={{ padding: 3 + 'px' }}>hours ago</span>
                  </span>
                </Para>
              </div>
            );
          })}
      </List>
    </div>
  );
};

export default HomePage;
