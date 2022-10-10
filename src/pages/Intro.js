import { Link } from 'react-router-dom';

import Title from '../images/title-img.png';
import Start from '../images/start-btn.png';

const Intro = () => {
  return (
    <div id="intro" className="intro">
      <img src={Title} className="title-img" alt="제목 이미지" />
      <Link className="btn" to="/main">
        <img src={Start} className="start-btn" alt="시작 버튼" />
      </Link>
    </div>
  );
};

export default Intro;
