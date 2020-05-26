import React, { useState, useEffect } from 'react';
import Header from '../../molecules/Header/Header';
import Anchor from '../../atoms/Anchor/Anchor';
import Image from '../../atoms/Image/Image';
import Para from '../../atoms/Para/Para';
import List from '../../molecules/List/List';
import { getHoursFromISOString } from '../../../utils/dateTime';
import axios from 'axios';
import './HomePage.scss';

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
      url: '/',
    },
    {
      name: 'new',
      url: '/',
    },
  ];

  return (
    <div className="homepage">
      <div className="homepage-header flex align-center">
        <Anchor to="/" className="hompage-header-icon">
          <Image
            src="y18.gif"
            width="18"
            height="18"
            className="header-image"
          />
        </Anchor>
        {anchorArray.map((linkItem) => (
          <Header item={linkItem} className="header-container" />
        ))}
      </div>
      <List className="list-container">
        {data &&
          data.hits &&
          data.hits.map((item) => {
            return (
              <div className="list-content flex align-center">
                <div className="comments">{item.num_comments}</div>
                <div className="points">{item.points}</div>
                <Para className="story-details">
                  <span className="story-title">{item.title}</span>
                  <Anchor
                    to={item.url}
                    className="story-url"
                  >{`(${item.url})`}</Anchor>
                  <span className="keyword-by">by</span>
                  <span className="story-author">{item.author}</span>
                  <span className="story-time">
                    {getHoursFromISOString(item.created_at)}
                    <span className="hours-ago-keyword">hours ago</span>
                  </span>
                  <span className="hide-brackets">[</span>
                  <span>hide</span>
                  <span className="hide-brackets">]</span>
                </Para>
              </div>
            );
          })}
      </List>
    </div>
  );
};

export default HomePage;
