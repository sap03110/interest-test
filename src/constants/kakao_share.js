import { APP_DESCRIPTION, APP_IMAGE, APP_LINK, APP_NAME, START_BUTTON_TEXT } from '../constants';

const kakaoShareLinkData = {
  container: '.kakao',
  objectType: 'feed',
  content: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    imageUrl: APP_IMAGE,
    link: {
      mobileWebUrl: APP_LINK,
      webUrl: APP_LINK,
    },
  },
  buttons: [
    {
      title: START_BUTTON_TEXT,
      link: {
        mobileWebUrl: APP_LINK,
        webUrl: APP_LINK,
      },
    },
  ],
};

export default kakaoShareLinkData;
