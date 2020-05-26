import React from 'react';
import Header from '../../molecules/Header/Header';
import Anchor from '../../atoms/Anchor/Anchor';
import Image from '../../atoms/Image/Image';
import Para from '../../atoms/Para/Para';
import List from '../../molecules/List/List';
import timer from '../../../utils/dateTime';
import { extractDomainFromUrl } from '../../../commons/utils/url';
import {
  filterDataWithHiddenData,
  updateUpVoteInHomePageData,
} from '../../../containers/organisms/HomePage/utils';
import './HomePage.scss';
import Vote from '../../../containers/atoms/UpVote/UpVote';
import Hide from '../../../containers/atoms/Hide/Hide';
import LoadMore from '../../../containers/atoms/LoadMore/LoadMore';

const HomePage = ({ homePageData }) => {
  const filteredData = filterDataWithHiddenData(homePageData);
  const votedData = updateUpVoteInHomePageData(filteredData);

  const hits = votedData && votedData.hits ? votedData.hits : '';

  const anchorArray = [
    {
      name: 'top',
    },
    {
      name: 'new',
    },
  ];

  return (
    <div className="homepage">
      <div className="homepage-header flex align-center">
        <Anchor className="hompage-header-icon">
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
        {hits &&
          hits.map((item) => {
            return (
              <div className="list-content flex align-center">
                <div className="comments">{item.num_comments}</div>
                <div className="points flex">
                  {item.points}

                  {!item.voted && <Vote objectId={item.objectID} />}
                </div>
                <Para className="story-details">
                  <span className="story-title">{item.title}</span>
                  <span className="story-url">{`(${extractDomainFromUrl(
                    item.url,
                  )})`}</span>
                  <span className="keyword-by">by</span>
                  <span className="story-author">{item.author}</span>
                  <span className="story-time">
                    {timer(item.created_at_i)}
                  </span>
                  <span className="hide-brackets">[</span>
                  <Hide objectId={item.objectID} />
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

export default HomePage;
