import React from 'react';
import Para from '../../atoms/Para/Para';
import List from '../../molecules/List/List';
import timer from '../../../utils/dateTime';
import Vote from '../../../containers/atoms/UpVote/UpVote';
import Hide from '../../../containers/atoms/Hide/Hide';
import { extractDomainFromUrl } from '../../../commons/utils/url';
import '../../organisms/HomePage/HomePage.scss';

const HomePageList = ({hits}) => {
  return (
    <List className="list-container">
      {hits &&
        hits.map(item => {
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
                <span className="story-time">{timer(item.created_at_i)}</span>
                <span className="hide-brackets">[</span>
                <Hide objectId={item.objectID} />
                <span className="hide-brackets">]</span>
              </Para>
            </div>
          );
        })}
    </List>
  );
};

export default HomePageList;
