import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Chart from 'react-apexcharts';

import Top from '../images/back2_top.png';
import Bottom from '../images/back2_bottom.png';
import restart from '../images/restart-btn.png';

import Modal1 from '../components/resultModal';
import Modal2 from '../components/resultModal2';
import Modal3 from '../components/resultModal3';

const Result = ({
  answer,
  answer2,
  answer3,
  answer4,
  question,
  getNext,
  setAnswer,
  setAnswer2,
  setAnswer3,
  setAnswer4,
}) => {
  const [modal1, openModal1] = useState(false);
  const [modal2, openModal2] = useState(false);
  const [modal3, openModal3] = useState(false);

  const chartInfo = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: answer2.map((item) => {
          return item.id;
        }),
      },
      colors: ['#d94925'],
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
    },
    series: [
      {
        name: '역량지수',
        data: answer2.map((item) => {
          return item.value;
        }),
      },
    ],
  };

  useEffect(() => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) kakao.init('09287439363b5b4c9530bea6c71dd1d4');
      kakao.Link.createDefaultButton({
        container: '.kakao',
        objectType: 'feed',
        content: {
          title: '내 성격과 딱 맞는 4차 산업혁명 분야는?',
          description: '개인의 적성, 흥미, 여건 등을 진단하여 이를 통해 맞춤형 교육서비스를 제공하기 위한 테스트',
          imageUrl: 'https://k.kakaocdn.net/14/dn/btqZjhpcA2v/MgXIqp1ShQSFl7XWmNEkM1/o.jpg',
          link: {
            mobileWebUrl: 'https://guiyomj.github.io/interest-test/',
            webUrl: 'https://guiyomj.github.io/interest-test/',
          },
        },
        buttons: [
          {
            title: '테스트 시작',
            link: {
              mobileWebUrl: 'https://guiyomj.github.io/interest-test/',
              webUrl: 'https://guiyomj.github.io/interest-test/',
            },
          },
        ],
      });
    }
  });

  return (
    <div id="result" className="appear">
      <div className="result-div">
        <img src={Top} alt="결과 이미지 헤더" />
        <div className="result-cont">
          <h1 className="title">진단 결과</h1>
          <p className="sub">자세한 결과는 각 영역별 '자세히 보기' 버튼을 클릭하여 확인하실 수 있습니다.</p>
          <div className="part-list">
            <p className="label">Part 1. 흥미</p>
            <p
              className="etc-btn"
              onClick={() => {
                openModal1(true);
              }}
            >
              <svg
                id="bold"
                enableBackground="new 0 0 24 24"
                height="32"
                viewBox="0 0 24 24"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#d94925"
                  d="m12 0c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zm5.25 13h-4.25v4.25c0 .552-.448 1-1 1s-1-.448-1-1v-4.25h-4.25c-.552 0-1-.448-1-1s.448-1 1-1h4.25v-4.25c0-.552.448-1 1-1s1 .448 1 1v4.25h4.25c.552 0 1 .448 1 1s-.448 1-1 1z"
                />
              </svg>
            </p>
            <p className="label-cont">
              사용자님의 흥미 있는 4차 산업혁명 분야는 <b>{answer.join(', ')}</b>으로 나타났습니다.
            </p>
          </div>
          <div className="part-list">
            <p className="label">Part 2. 역량</p>
            <p
              className="etc-btn"
              onClick={() => {
                openModal2(true);
              }}
            >
              <svg
                id="bold"
                enableBackground="new 0 0 24 24"
                height="32"
                viewBox="0 0 24 24"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#d94925"
                  d="m12 0c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zm5.25 13h-4.25v4.25c0 .552-.448 1-1 1s-1-.448-1-1v-4.25h-4.25c-.552 0-1-.448-1-1s.448-1 1-1h4.25v-4.25c0-.552.448-1 1-1s1 .448 1 1v4.25h4.25c.552 0 1 .448 1 1s-.448 1-1 1z"
                />
              </svg>
            </p>
            <div className="label-cont chart-div">
              <Chart options={chartInfo.options} series={chartInfo.series} type="bar" width="100%" height="auto" />
            </div>
          </div>
          <div className="part-list">
            <p className="label">Part 3. 개인 여건</p>
            <p
              className="etc-btn"
              onClick={() => {
                openModal3(true);
              }}
            >
              <svg
                id="bold"
                enableBackground="new 0 0 24 24"
                height="32"
                viewBox="0 0 24 24"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#d94925"
                  d="m12 0c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zm5.25 13h-4.25v4.25c0 .552-.448 1-1 1s-1-.448-1-1v-4.25h-4.25c-.552 0-1-.448-1-1s.448-1 1-1h4.25v-4.25c0-.552.448-1 1-1s1 .448 1 1v4.25h4.25c.552 0 1 .448 1 1s-.448 1-1 1z"
                />
              </svg>
            </p>
            <div className="label-cont">
              <p>
                사용자님의 학습 장애요인은 <b>{answer3.join(', ')}</b>으로 나타났습니다.
              </p>
              <p>
                사용자님의 생애발달 과업에 따른 관심 분야는 <b>{answer4.length}</b>가지로, <b>{answer4.join(', ')}</b>
                으로 나타났습니다.
              </p>
            </div>
          </div>
          <div className="share-div">
            <h1 className="title">공유하기</h1>
            <p className="sub">친구들과 테스트를 공유하고 함께 하고 싶다면?</p>
            <ul className="share-btn-list">
              <li className="share-btn kakao">
                <svg
                  enableBackground="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m12 1c-6.627 0-12 4.208-12 9.399 0 3.356 2.246 6.301 5.625 7.963-1.678 5.749-2.664 6.123 4.244 1.287.692.097 1.404.148 2.131.148 6.627 0 12-4.208 12-9.399 0-5.19-5.373-9.398-12-9.398z"
                    fill="#3e2723"
                  />
                  <g fill="#ffeb3b">
                    <path d="m10.384 8.27c-.317-.893-1.529-.894-1.845-.001-.984 3.052-2.302 4.935-1.492 5.306 1.078.489 1.101-.611 1.359-1.1h2.111c.257.487.282 1.588 1.359 1.1.813-.371-.489-2.195-1.492-5.305zm-1.614 2.987.692-1.951.691 1.951z" />
                    <path d="m5.365 13.68c-1.198 0-.49-1.657-.692-4.742-.429-.074-1.76.297-1.76-.673 0-.371.305-.673.679-.673 2.518.18 4.224-.47 4.224.673 0 .987-1.275.59-1.76.673-.2 3.075.505 4.742-.691 4.742z" />
                    <path d="m13.154 13.579c-1.159 0-.454-1.565-.663-5.301 0-.91 1.413-.909 1.413 0v4.04c.669.089 2.135-.33 2.135.63-.001 1.007-1.576.503-2.885.631z" />
                    <path d="m19.556 13.38-1.624-2.137-.24.239v1.5c0 .38-.31.688-.693.688-1.203 0-.482-1.732-.692-5.392 0-.379.31-.688.692-.688 1.045 0 .594 1.478.692 2.166 1.96-1.873 1.913-2.072 2.316-2.072.556 0 .897.691.527 1.058l-1.578 1.567 1.704 2.243c.556.725-.555 1.556-1.104.828z" />
                  </g>
                </svg>
              </li>
              <li
                className="share-btn facebook"
                onClick={() =>
                  window.open(
                    'http://www.facebook.com/sharer/sharer.php?u=' +
                      encodeURIComponent('https://guiyomj.github.io/interest-test/'),
                  )
                }
              >
                <svg
                  id="Bold"
                  enableBackground="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#fff"
                    d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"
                  />
                </svg>
              </li>
              <li
                className="share-btn twitter"
                onClick={() =>
                  window.open(
                    'https://www.twitter.com/intent/tweet?text=' +
                      encodeURIComponent('내 성격과 딱 맞는 4차 산업혁명 분야는?') +
                      '&url=' +
                      encodeURIComponent('https://guiyomj.github.io/interest-test/'),
                  )
                }
              >
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fff"
                    d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
                                        c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
                                        c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
                                        c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
                                        c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
                                        c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
                                        C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
                                        C480.224,136.96,497.728,118.496,512,97.248z"
                  />
                </svg>
              </li>
              <li className="share-btn link">
                <CopyToClipboard
                  text="https://guiyomj.github.io/interest-test/"
                  onCopy={() => alert('URL이 복사되었습니다.')}
                >
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="24"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#444"
                      d="M406,332c-29.641,0-55.761,14.581-72.167,36.755L191.99,296.124c2.355-8.027,4.01-16.346,4.01-25.124
                                            c0-11.906-2.441-23.225-6.658-33.636l148.445-89.328C354.307,167.424,378.589,180,406,180c49.629,0,90-40.371,90-90
                                            c0-49.629-40.371-90-90-90c-49.629,0-90,40.371-90,90c0,11.437,2.355,22.286,6.262,32.358l-148.887,89.59
                                            C156.869,193.136,132.937,181,106,181c-49.629,0-90,40.371-90,90c0,49.629,40.371,90,90,90c30.13,0,56.691-15.009,73.035-37.806
                                            l141.376,72.395C317.807,403.995,316,412.75,316,422c0,49.629,40.371,90,90,90c49.629,0,90-40.371,90-90
                                            C496,372.371,455.629,332,406,332z"
                    />
                  </svg>
                </CopyToClipboard>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img
              src={restart}
              className="restart-btn"
              alt="제목 이미지"
              onClick={() => {
                document.getElementById('result').classList.add('disappear');
                getNext(1);
                setAnswer([]);
                setAnswer2([]);
                setAnswer3([]);
                setAnswer4([]);
              }}
            />
          </Link>
        </div>
        <img src={Bottom} alt="결과 이미지 푸터" />
      </div>
      {modal1 === true && <Modal1 openModal={openModal1} list={answer.join(', ')} />}
      {modal2 === true && <Modal2 openModal={openModal2} list={answer2} question={question} />}
      {modal3 === true && <Modal3 openModal={openModal3} list={answer3} />}
    </div>
  );
};

export default Result;
