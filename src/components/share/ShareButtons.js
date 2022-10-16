import { useEffect } from 'react';

import Button from '../button/Button';
import Kakao from '../icon/Kakao';
import Facebook from '../icon/Facebook';
import Twitter from '../icon/Twitter';
import Copy from '../icon/Copy';

import {
  APP_NAME,
  APP_LINK,
  COPY_MESSAGE,
  FACEBOOK_SHARE_URL,
  SHARE_TITLE,
  SHARE_SUBTITLE,
  KAKAO_SHARE_TOKEN,
  TWITTER_SHARE_URL,
} from '../../constants';
import { copyToClipBoard } from '../../utils/string';
import kakaoShareLinkData from '../../constants/kakao_share';

const ShareButtons = () => {
  const handleTwitterShare = () => {
    window.open(`${TWITTER_SHARE_URL}?u=${encodeURIComponent(APP_LINK)}`);
  };

  const handleFacebookShare = () => {
    window.open(`${FACEBOOK_SHARE_URL}?text=${encodeURIComponent(APP_NAME)}&url=${encodeURIComponent(APP_LINK)}`);
  };

  const copyAppLink = () => {
    copyToClipBoard(APP_LINK);
    alert(COPY_MESSAGE);
  };

  useEffect(() => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) kakao.init(KAKAO_SHARE_TOKEN);
      kakao.Link.createDefaultButton(kakaoShareLinkData);
    }
  }, []);

  return (
    <div className="share-div">
      <h1 className="title">{SHARE_TITLE}</h1>
      <p className="sub">{SHARE_SUBTITLE}</p>
      <ul className="share-btn-list">
        <li className="share-btn kakao">
          <Button className="icon-btn">
            <Kakao />
          </Button>
        </li>
        <li className="share-btn facebook">
          <Button className="icon-btn" onClick={handleFacebookShare}>
            <Facebook />
          </Button>
        </li>
        <li className="share-btn twitter">
          <Button className="icon-btn" onClick={handleTwitterShare}>
            <Twitter />
          </Button>
        </li>
        <li className="share-btn link">
          <Button className="icon-btn" onClick={copyAppLink}>
            <Copy />
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default ShareButtons;
