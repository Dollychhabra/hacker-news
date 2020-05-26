import React from 'react';
import Header from '../../molecules/Header/Header';
import Anchor from '../../atoms/Anchor/Anchor';
import Image from '../../atoms/Image/Image';
import Para from '../../atoms/Para/Para';
import List from '../../molecules/List/List';
import LoadMore from '../../atoms/LoadMore';
import { getHoursFromISOString } from '../../../utils/dateTime';
import PropTypes from 'prop-types';
import './HomePage.scss';
import Vote from '../../../containers/atoms/UpVote/UpVote';

const HomePage = ({ hideData, homePageData }) => {

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
        {homePageData &&
          homePageData.hits.map((item) => {
            return (
              <div className="list-content flex align-center">
                <div className="comments">{item.num_comments}</div>
                <div className="points flex">
                  {item.points}

                  {!item.voted && <Vote objectId={item.objectID} />}
                </div>
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
                  <Anchor
                    onClick={(e) => {
                      e.preventDefault();
                      hideData(item.objectId);
                    }}
                  >
                    hide
                  </Anchor>
                  <span className="hide-brackets">]</span>
                </Para>
              </div>
            );
          })}
      </List>
      <LoadMore />
    </div>
  );
};

HomePage.propTypes = {
  hideData: PropTypes.func.isRequired,
};

export default HomePage;
