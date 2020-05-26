import { LocalStorageUtil } from '../../../utils/localStorage';
import { HIDE_DATA_KEY } from '../../atoms/Hide/constants';
import { VOTE_KEY } from '../../atoms/UpVote/constants';

export const removeHomePageData = (homePageState, objectID) => {
  const { data, ...others } = homePageState;
  const { hits } = data;

  const dataIndex = hits.findIndex(data => {
    return data.objectID === objectID;
  });

  hits.splice(dataIndex, 1);

  return {
    data: {
      ...data,
      hits: [...hits],
    },
    ...others,
  };
};

export const filterDataWithHiddenData = homePageData => {
  const storage = new LocalStorageUtil();

  const hiddenDataIds = JSON.parse(storage.getItem(HIDE_DATA_KEY) || '[]');

  if (hiddenDataIds.length) {
    const { hits } = homePageData;
    const filteredHits = hits.filter(hit => {
      return hiddenDataIds.indexOf(hit.objectID) === -1;
    });

    return {
      ...homePageData,
      hits: filteredHits,
    };
  }
  return homePageData;
};

export const updateUpVoteInHomePageData = homePageData => {
  const storage = new LocalStorageUtil();

  const votedDataIds = JSON.parse(storage.getItem(VOTE_KEY) || '[]');

  if (votedDataIds.length) {
    const { hits } = homePageData;
    const votedHits = hits.map(hit => {
      const cloneHit = { ...hit };

      if (votedDataIds.indexOf(cloneHit.objectID) > -1) {
        cloneHit.voted = true;
      }

      return cloneHit;
    });

    return {
      ...homePageData,
      hits: votedHits,
    };
  }
  return homePageData;
};
