import React from 'react';
import Header from '../../molecules/Header/Header';
import Anchor from '../../atoms/Anchor/Anchor';
import Image from '../../atoms/Image/Image';
import {
  filterDataWithHiddenData,
  updateUpVoteInHomePageData,
} from '../../../containers/organisms/HomePage/utils';
import './HomePage.scss';
import LoadMore from '../../../containers/atoms/LoadMore/LoadMore';
import HomePageList from '../../molecules/HomePageList/HomePageList';

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
            src="/images/logo.png"
            width="18"
            height="18"
            className="header-image"
          />
        </Anchor>
        {anchorArray.map((linkItem) => (
          <Header item={linkItem} className="header-container" />
        ))}
      </div>
      <HomePageList hits={hits} />
      <LoadMore />
    </div>
  );
};

export default HomePage;
